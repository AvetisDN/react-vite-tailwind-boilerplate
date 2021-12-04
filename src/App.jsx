import {FaReact} from 'react-icons/fa'
const App = () => {
  return (
    <div className='w-full min-h-screen grid place-items-center'>
      <h1 className='flex gap-x-3 font-normal items-center text-7xl'>
        Hello React
        <FaReact className='text-8xl text-blue-500' />
      </h1>
    </div>
  )
}

export default App
