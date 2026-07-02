  const apiKey = import.meta.env.VITE_VIRUSTOTAL_API_KEY;
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
      const result = await response.json();
      return result;
  }