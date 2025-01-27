import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
    <div className='flex justify-between items-center p-4 max-w-6xl mx-auto bg-gray-800 text-white'>
        <ul className='flex space-x-4'>
            <li>SignIn</li>
            <li>Home</li>
            <li>About</li>
        </ul>
        <Link href="/" className=''>
        <span className='text-2xl font-bold bg-lime-600 rounded-lg py-1 px-2'>
            IMDB
        </span>
        <span className='text-xl font-semibold'>
            MOVIES
        </span>
        </Link>
    </div>
  )
}
