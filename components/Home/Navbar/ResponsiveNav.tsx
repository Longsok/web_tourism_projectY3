"use client";
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Nav open={open} setOpen={setOpen} />
      <MobileNav open={open} setOpen={setOpen} />
    </div>
  )
}

export default ResponsiveNav
