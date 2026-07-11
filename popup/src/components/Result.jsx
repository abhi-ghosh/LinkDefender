import {CircleAlert,CircleCheck,SquareArrowOutUpRight} from 'lucide-react'
export default function Result({
  textColor,
  borderColor,
  message,
  icon,
  verdict,
  color,
  states,
  setState,
  url,
  setUrl,
  resultObject,
  hoverColor
}) {
  const vendors = resultObject.data.attributes.results;
  const malicious = Object.entries(vendors).filter((vendor) => vendor[1].category === 'malicious');
  const harmless = Object.entries(vendors).filter((vendor) => vendor[1].category === 'harmless');
  const undetected = Object.entries(vendors).filter((vendor) => vendor[1].category === 'undetected');
  const goodReasons = [
    `Detected as harmless by ${harmless.length} vendors`,
    `${undetected.length} vendors have 0 opinions about this link`
  ];
  const badReasons = malicious.map((vendor) => `Detected as malicious by ${vendor[0]}`);
  const reasons = verdict === 'Safe' ? goodReasons : badReasons;
  const ListIcon = verdict === 'Safe' ? CircleCheck : CircleAlert;
  const Icon = icon;
  const handleClick = () => {
    setState(states.IDLE);
    setUrl('');
  };
  return (
    <>
      <div className='mb-5 relative'>
          <div className={`flex items-center justify-between w-full border ${borderColor} rounded-md p-2 text-sm font-semibold ${textColor}`}>
            {url}
            <div className='group'>
              <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              >
                <SquareArrowOutUpRight className={`text-white w-5 h-5 cursor-pointer ${hoverColor} transition duration-300`} />
              </a>
              <span class="text-white absolute right-0 -top-5 px-2 py-1 rounded animate-bounce opacity-0 transition-opacity
                    duration-300 ease-in-out group-hover:opacity-100">{verdict==='Safe'?'✅ Go to link':'⚠️ Proceed anyway?'}
              </span>
            </div>
          </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className={`flex relative justify-center items-center border-2 ${borderColor} w-20 h-20 rounded-full`}>
          <Icon className={`absolute blur-sm ${color} opacity-10 w-12 h-12 animate-pulse`}/>
          <Icon className={`${color} w-12 h-12 animate-pulse`}/>
        </div>
        <p className={`uppercase text-xl ${textColor} font-bold`}>{verdict}</p>
        <p className='text-md font-semibold text-gray-400 text-center'>{message}</p>
      </div>
      <div className='mt-5'>
        <p className='text-md font-semibold text-gray-400 mb-2'>Reasons:</p>
        <ul className='text-sm text-gray-400'>
          {reasons.map((reason, index) => (
            <li key={index} className='text-sm flex items-center gap-2 mt-2'>
              <ListIcon className={`w-4 h-4 ${color}`} />
              {reason}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => handleClick()} className='border w-full mt-4 cursor-pointer duration-100 ease-in-out border-blue-500 hover:bg-blue-500/20 text-gray-400 hover:text-white font-light py-2 px-4 rounded'>
        Check Another One
      </button>
    </>
  )
}