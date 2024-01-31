import React from 'react'
import MenuItem from './MenuItem';
import { RiHomeHeartFill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
      <div className='flex'>
        <MenuItem title="Home" address="/" Icon={RiHomeHeartFill} />
        <MenuItem title="About" address="/about" Icon={FaInfoCircle} />
      </div>
      <div>
        <Link href="/">
          <h2 className='text-2xl'><span className='font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDB</span> <span className='text-xl hidden sm:inline'>Clone</span></h2>
        </Link>
      </div>
    </div>
  )
}
