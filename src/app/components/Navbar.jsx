import React from 'react'
import NavbarItem from './NavbarItem'
import { Suspense } from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4'>
      <Suspense>
        <NavbarItem title="Trending" param="fetchTrending"/>
        <NavbarItem title="Top Rated" param="fetchTopRated"/>
      </Suspense>
      
    </div>
  )
}
