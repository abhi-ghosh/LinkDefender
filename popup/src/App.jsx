import { useState } from 'react'
import {Shield,Heart,Skull, CircleCheck} from 'lucide-react'
import Idle from './components/Idle'
import Loading from './components/Loading'
import Result from './components/Result'
export default function App() {
  const [state, setState] = useState('safe')
  const states = {
  IDLE: "idle",
  LOADING: "loading",
  SAFE: "safe",
  DANGER: "danger",
};
let content;
switch (state) {
  case states.IDLE:
    content = <Idle states={states} setState={setState}/>;
    break;
  case states.LOADING:
    content = <Loading/>;
    break;
  case states.SAFE:
    content = <Result
      textColor="text-green-600"
      borderColor="border-green-600"
      icon={CircleCheck}
      color = "text-green-600"
      verdict="Safe"
      message="This link is safe to click!"
      setState={setState}
    />;
    break;
  case states.DANGER:
    content = <Result
      textColor="text-red-600"
      borderColor="border-red-600"
      color = "text-red-600"
      icon={Skull}
      verdict="Danger"
      message="This link is dangerous!"
      setState={setState}
    />;
    break;
  default:
    content = <Idle />;
}
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
        {content}
      </main>
      <footer className='p-5 border-t border-slate-700 text-sm text-gray-500 text-center flex items-center justify-center gap-2'>
        <p>Stay safe online my friend</p>
        <Heart className='inline w-4 h-4 text-blue-500' />
      </footer>
    </div>
  )
}