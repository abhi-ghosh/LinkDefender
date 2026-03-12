export default function Idle({setState, states}) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setState(states.LOADING);
    }}>
      <label htmlFor="url" className=' text-blue-500
        font-bold uppercase block text-[12px] mb-1'
      >
        Scanned Link
      </label>
      <input type="text" id="url" name="url"
        placeholder='paste link here'
        className='text-sm w-full p-3 rounded-md
        bg-slate-800 text-white focus:outline-none
        focus:ring-1 focus:ring-blue-500 placeholder:text-gray-500
        hover:ring-1 hover:ring-gray-500 transition-all duration-200'
      />
      <button type="submit" className='w-full mt-4 bg-blue-500 text-white p-3 rounded-md
        hover:bg-blue-600 transition-colors duration-200 cursor-pointer
      '>
        Scan Link
      </button>
    </form>
  )
}