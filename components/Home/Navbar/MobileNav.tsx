"use client";
import React from 'react'
import { navLinks } from '@/Constant/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

interface MobileNavProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav = ({ open, setOpen }: MobileNavProps) => {
  return (
    <>
      {/* Overlay (The Shadow behind the menu) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/70 z-[1001] lg:hidden transition-all duration-300
        ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      />

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[60%] sm:w-[50%] bg-blue-400 z-[1050]
        flex flex-col justify-center space-y-6 transform transition-transform duration-500
        /* This shadow adds depth to the side menu itself against the overlay */
        shadow-2xl
        ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.id} 
            href={link.url} 
            onClick={() => setOpen(false)}
            className='text-white text-[22px] sm:text-[34px] ml-12 font-semibold !no-underline block w-fit hover:text-yellow-300 transition-colors duration-200'
          >
            {link.label}
          </Link>
        ))}

        {/* Close Icon */}
        <CgClose
          onClick={() => setOpen(false)}
          className='absolute top-5 right-5 w-8 h-8 text-white cursor-pointer hover:scale-110 transition-transform'
        />
      </div>
    </>
  )
}

export default MobileNav