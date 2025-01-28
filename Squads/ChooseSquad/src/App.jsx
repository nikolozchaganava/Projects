import React from 'react'
import guram from './assets/guram.jpg'
import kobakhidze from './assets/kobakhidze.jpg'
import shavadze from './assets/shavadze.jpg' 
import diasamidze from './assets/diasamidze.jpg'
import khucishvili from './assets/khucishvili.jpg'
import motiashvili from './assets/motiashvili.jpg'
import raimanidze from './assets/raimanidze.png'
import gurgenidze from './assets/gurgenidze.png'
import witadze from './assets/witadze.png'

export default function App() {
  return (
    <div className='bg-[#082567] h-screen max-w-[100vw] flex justify-center items-center flex-col gap-32'>
      <h1 className='text-7xl text-white font-bold tracking-wider'>Choose Squad Leader</h1>
      <ul className='flex gap-2'>
        <li><img src={guram} alt="" /></li>
        <li><img src={kobakhidze} alt="" /></li>
        <li><img src={shavadze} alt="" /></li>
        <li><img src={diasamidze} alt="" /></li>
        <li><img src={khucishvili} alt="" /></li>
        <li><img src={motiashvili} alt="" /></li>
        <li><img src={raimanidze} alt="" /></li>
        <li><img src={witadze} alt="" /></li>
        <li><img src={gurgenidze} alt="" /></li>
      </ul>
    </div>
  )
}
