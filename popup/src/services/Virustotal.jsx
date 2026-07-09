  const apiKey = import.meta.env.VITE_VIRUSTOTAL_API_KEY;
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const attempts =20;
  const delay = 3000; // 3 seconds
  export const checkURL = async (url) => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'x-apikey': apiKey,
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({url})
    };
      const response = await fetch ('https://www.virustotal.com/api/v3/urls', options);
      if (!response.ok) {
          throw new Error("Failed to submit URL");
      }
      const result = await response.json();
      console.log(result);
      const analysisId = result.data.id;
      for (let attempt = 1; attempt <= attempts; attempt++){
        const analysisResponse = await fetch(`https://www.virustotal.com/api/v3/analyses/${analysisId}`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'x-apikey': apiKey
          }
        });
        if (!analysisResponse.ok) {
            throw new Error("Failed to retrieve analysis");
        }
        const analysisData = await analysisResponse.json();
        console.log(analysisData.data.attributes.status);
        if (analysisData.data.attributes.status === 'completed') {
          console.log("Analysis completed successfully");
          console.log(analysisData);
          return analysisData;
        }
        console.log(`Attempt ${attempt} failed. Retrying in ${delay / 1000} seconds...`);
        await sleep(delay);
        }
        throw new Error("Analysis did not complete in time - Timed out");
  }