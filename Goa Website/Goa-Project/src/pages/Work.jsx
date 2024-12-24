import React from 'react'
import Header from '../components/Header'
import interaction from '../assets/interactive.jpeg'
import Footer from '../components/Footer'

export default function Work() {
  return (
    <div>
      <Header />
      <section className='bg-[#EFF0EF] h-screen w-full relative flex justify-center items-center p-8 space-x-16'>
        <img src={interaction} alt="" className='object-cover w-60 h-80'/>
        <div className='space-y-5'>
          <h1 className='text-green-500 uppercase font-bold mb-4'>Interactive learning activities</h1>
          <p className='text-[#595959] w-[56ch] text-lg'>At GOA, we believe that learning is most effective when it's interactive. Our Interactive Learning Activities are designed to complement your course, allowing you to apply concepts in a collaborative environment. Work closely with your squad to solve challenges, brainstorm ideas, and create innovative solutions. These activities not only reinforce your understanding but also build essential teamwork and communication skills. Connect with fellow students, share insights, and grow together in a supportive atmosphere. Enjoy a dynamic learning experience that makes education both enjoyable and impactful, setting you up for success in your career journey.</p>
          <button className='uppercase bg-green-600 hover:bg-green-700 transition-all py-3 px-10 rounded-sm text-lg font-semibold text-white'>Schedule appointment</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
