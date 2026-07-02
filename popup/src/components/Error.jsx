import { Frown } from "lucide-react"
import {states} from './States'
export default function Error({setState}) {
  return (
<div className="flex flex-col items-center">
    <Frown className="w-16 h-16 text-blue-500"/>
    <p className="text-gray-400 text-md mt-2">Sorry, something went wrong.</p>
    <button onClick={() => setState(states.IDLE)}
    className='mt-4
    cursor-pointer duration-100
    ease-in-out text-blue-500
  hover:text-blue-400 font-light'>
        Please try again
      </button>
  </div>

  )
}