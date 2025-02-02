import Link from 'next/link'
import DarkSwitch from './DarkSwitch'
import { SignedIn,SignedOut,UserButton } from '@clerk/nextjs'
export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto text-lime-500'>
      <ul className='flex space-x-4'>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <li>
          <Link href="/sign-in">Sign in</Link>
        </li>
      </SignedOut>
        <li className='hidden sm:block'>
          <Link href="/">Home</Link>
        </li>
        <li className='hidden sm:block'>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div className='flex gap-4 items-center'>
        {/* <DarkSwitch /> */}
        <DarkSwitch />
      <Link href="/" className='flex gap-1  items-center'>
        <span className='text-2xl text-[#fff] font-bold bg-lime-600 rounded-lg py-1 px-2'>
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
