import NavbarItem from './NavbarItem';
export default function Navbar() {
  return (
    <div className='flex items-center dark:bg-gray-600 bg-lime-100 p-4 lg:text-lg justify-center gap-6 mt-2 w-full'>
      <NavbarItem title='Trending' param='trending' />
      <NavbarItem title='Top Rated' param='rated' />
    </div>
  );
}