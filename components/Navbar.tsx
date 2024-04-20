import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='flex gap-5 flex-between fixed z-50 w-full bg-dark-1 px-6 py-6 lg:px-10'>
      <Link className='flex items-center gap-1' href='/'>
        <Image
        src="/icons/main_logo.png"
        width={42}
        height={42}
        alt='Sign-Bridge Logo'
        className='max-sm:size-10' />
      
      <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Sign-Bridge</p>
      </Link>
      <div className='flex-between gap-5'>
        {/* Clerk User Management */}
        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar