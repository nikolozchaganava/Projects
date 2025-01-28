import React from 'react'
import logo from '../assets/logo.png'
import HeaderNav from './HeaderNav'

export default function Header() {
  return (
    <header className='w-full max-w-[100vw] px-5 py-3 flex justify-around items-center'>
      <img src={logo} alt="" className='w-44 h-40 cursor-pointer'/>
      <HeaderNav />
    </header>
  )
}
