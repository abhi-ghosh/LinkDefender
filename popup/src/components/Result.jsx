import {Copy} from 'lucide-react'
export default function Result({
  textColor,
  borderColor,
  message,
  icon,
  verdict,
  color,
  setState
}) {
  const Icon = icon;
  const handleCopy = () => {
  navigator.clipboard.writeText('random link');
}
  return (
    <>
      <div className='mb-5'>
          <p className='text-sm font-semibold text-gray-400 mb-2'>Redirection Detected!</p>
          <div className={`flex items-center justify-between w-full border ${borderColor} rounded-md p-2 text-sm font-semibold ${textColor}`}>
            random link
            <Copy className='w-5 h-5 cursor-pointer'
            onClick={handleCopy}
            />
          </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className={`flex relative justify-center items-center border-2 ${borderColor} w-20 h-20 rounded-full`}>
          <Icon className={`absolute blur-sm ${color} opacity-10 w-12 h-12 animate-pulse`}/>
          <Icon className={`${color} w-12 h-12 animate-pulse`}/>
        </div>
        <p className={`uppercase text-xl ${textColor} font-bold`}>{verdict}</p>
        <p className='text-sm font-semibold text-gray-400 text-center'>{message}</p>
      </div>
      <button onClick={() => setState('idle')} className='border w-full mt-4 cursor-pointer duration-100 ease-in-out border-blue-500 hover:bg-blue-500/20 text-gray-400 hover:text-white font-light py-2 px-4 rounded'>
        Check Another One
      </button>
    </>
  )
}