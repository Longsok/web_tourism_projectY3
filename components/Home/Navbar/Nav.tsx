"use client";
import { navLinks } from '@/Constant/constant'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'

interface NavProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({ setOpen }: NavProps) => {
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90)
    }

    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <div
      className={`
        fixed top-0 left-0 w-full h-[12vh] z-[1000]
        flex transition-all duration-300
        ${navBg ? 'bg-blue-400 shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

        {/* Logo */}
        <img
          src="/image/Adobe Express - file.png"
          alt="logo"
          className="w-24 h-24 object-contain"
        />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className='relative text-white text-[18px] font-medium !no-underline
                after:block after:absolute after:h-[3px] after:bg-yellow-300
                after:w-full after:scale-x-0 hover:after:scale-x-100
                after:transition after:duration-300 after:origin-left after:-bottom-1'
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Burger Menu */}
        <HiBars3BottomRight
          onClick={() => setOpen(true)}
          className='w-8 h-8 text-white lg:hidden cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Nav
