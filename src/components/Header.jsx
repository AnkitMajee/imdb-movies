import Link from 'next/link'
import DarkSwitch from './DarkSwitch'
import { SignedIn,SignedOut,UserButton } from '@clerk/nextjs'
export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto  border-b-2 border-x-2 rounded-b-[16px] border-[lime] py-6 px-6'>
      <ul className='flex space-x-4 text-[20px] font-[600] hover:border-lime-500 hover:rounder-[6px] gap-4'>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <li className='hover:text-lime-500'>
          <Link href="/sign-in">Sign in</Link>
        </li>
      </SignedOut>
        <li className='hidden sm:block hover:text-lime-500'>
          <Link href="/">Home</Link>
        </li>
        <li className='hidden sm:block hover:text-lime-500'>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div className='flex gap-4 items-center py-2 px-4'>
        {/* <DarkSwitch /> */}
        <DarkSwitch />
      <Link href="/" className='flex gap-1  items-center'>
        <span className='text-2xl text-[#fff] hover:text-[#65a30d] font-bold bg-lime-700 hover:bg-[#fff] rounded-[6px] py-1 px-2'>
          IMDB
        </span>
        <span className='text-xl font-semibold'>
          MOVIES
        </span>
      </Link>
      </div>
    </div>
  )
}
