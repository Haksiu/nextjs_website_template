import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-gray-800'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <p className='text-white'>Template Website</p> {/* This is a logo/name website (CHANGE IT) */}
        <div>
            <ul className='flex'>
                <Link href="/">
                    <li className='mr-6 text-sm uppercase font-bold text-white cursor-pointer'>Home</li>
                </Link>
                <Link href="/#about">
                    <li className='mr-6 text-sm uppercase font-bold text-white cursor-pointer'>About</li>
                </Link>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
