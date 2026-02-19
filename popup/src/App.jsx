import {Shield,Heart} from 'lucide-react'
export default function App() {

  return (
    <div className="font-sans bg-[#151c29] text-white w-96 rounded-2xl">
      <header className="p-5 border-b border-slate-700 flex items-center gap-3">
        <Shield className='w-9 h-9 border bg-slate-800 p-2 rounded-xl text-blue-500'/>
        <div>
            <h1 className="leading-tight text-xl font-semibold tracking-tight">
                  LinkDefender
            </h1>
            <p className='text-sm text-gray-500 font-medium'>Scan links before you click</p>
          </div>
      </header>
      <main className='p-5'>
        <form>
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
      </main>
      <nav className='p-5 border-t border-slate-700 text-sm text-gray-500 text-center flex items-center justify-center gap-2'>
        <p>Stay safe online my friend</p>
        <Heart className='inline w-4 h-4 text-blue-500' />
      </nav>
    </div>
  )
}