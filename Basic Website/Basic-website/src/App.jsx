import { useState } from 'react'
import { Header } from './components/Header'
import { Paragraph } from './components/Paragraph'

function App() {
  return (
    <div className={`bg-lamboImage bg-cover h-screen transition-all duration-500 ease-in-out w-full z-0 font-Anton animate-bgAnimation fixed bg-no-repeat max-lg:bg-center max-md:flex max-md:items-center max-md:flex-col`}>
        <Header />
        <main className='flex px-32 w-[55%] max-xl:w-[75%] max-lg:w-[90%] max-md:px-5 max-md:items-center max-md:text-center'>
          <Paragraph />
        </main>
    </div>
  )
}

export default App
