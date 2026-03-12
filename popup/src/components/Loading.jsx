import { Loader2 } from "lucide-react"
export default function Loading() {
  return (
    <div className='flex flex-col items-center gap-3'>
      <Loader2 className='w-12 h-12 text-blue-500 animate-spin'/>
      <p className='text-md text-gray-500'>Scanning link...</p>
    </div>
  )
}