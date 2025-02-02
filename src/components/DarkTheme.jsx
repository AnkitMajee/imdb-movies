'use client';
import { ThemeProvider } from 'next-themes'

// making it client side to easily use by client and not by default by server
export default function DarkTheme({children}) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors'>
        {children}
      </div>
    </ThemeProvider>
  )
};
