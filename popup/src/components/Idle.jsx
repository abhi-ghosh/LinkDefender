export default function Idle({setState, checkURL, states, setUrl, url, setError, setResultObject}) {
  const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
  const cleanUrl = url.trim();
  const checkedUrl = cleanUrl.length < 1 ? '' : cleanUrl.startsWith('http://')||cleanUrl.startsWith('https://')?cleanUrl:`https://${cleanUrl}`;
  const urlValdidate = (checkedUrl)=>{
    try {
      new URL(checkedUrl);
      return true;
    } catch {
      return false;
    }
  }
  const urlIsValid = urlValdidate(checkedUrl) && checkedUrl.length > 0 && urlRegex.test(checkedUrl);
  const showError = checkedUrl.length > 0 && !urlIsValid;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!urlIsValid) return;
    setState(states.LOADING);
    setError(null);
    setResultObject(null);
    const fetchData = async () => {
      try {
        const result = await checkURL(checkedUrl);
        setResultObject(result);
        console.log(result);
        if (result.data.attributes.stats.malicious > 0) {
          setState(states.DANGER);
        } else {
          setState(states.SAFE);
        }
      } catch (err) {
        setState(states.ERROR);
        setError(err);
        console.error(err);
      }
    };
    fetchData();
};
  return (
    <form onSubmit={handleSubmit} className='relative'>
      <label htmlFor="url" className=' text-blue-500
        font-bold uppercase block text-[12px] mb-1'
      >
        link to scan
      </label>
        <input type="text" id="url" name="url"
        placeholder='paste link here'
        className='text-sm w-full p-3 rounded-md
        bg-slate-800 text-white focus:outline-none
        focus:ring-1 focus:ring-blue-500 placeholder:text-gray-500
        hover:ring-1 hover:ring-gray-500 transition-all duration-200'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit(e);
          }
        }}
        />
        {showError && (
          <p className='text-red-500 text-sm mt-2'>
            Please enter a valid URL
          </p>
        )}
      <button disabled={!urlIsValid} type="submit" className='disabled:bg-gray-400 disabled:cursor-not-allowed w-full mt-4 bg-blue-500 text-white p-3 rounded-md
        hover:bg-blue-600 transition-colors duration-200 cursor-pointer
      '>
        Scan Link
      </button>
    </form>
  )
}