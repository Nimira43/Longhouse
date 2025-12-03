import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { PiBellSimpleLight, PiUserLight } from 'react-icons/pi'
import { TfiMenu } from 'react-icons/tfi'

const Navbar = () => {
  return ( 
    <nav className='bg-main border-b border-support'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            <button
              type='button'
              id='mobile-dropdown-button'
              className='hamburger-btn focus:outline-none'
            >
              <span className='absolute -inset-0.5'></span>
              <TfiMenu />
            </button>
          </div>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <Link className='flex flex-shrink-0 items-center' href='/'>
              <Image
                className='h-10 w-auto'
                src={logo}
                alt='Logo'
              />
              <span className='hidden md:block text-grey-light text-2xl ml-2 logo tracking-wider'>Longhouse</span>
            </Link>
            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2'>
                <Link
                  href='/'
                  className='text-light hover:bg-main-dark hover:text-grey-light rounded-md px-3 py-2'
                >
                  Home
                </Link>
                <Link
                  href='/properties'
                  className='text-light hover:bg-main-dark hover:text-grey-light rounded-md px-3 py-2'
                >
                  Properties
                </Link>
                <Link
                  href='/properties/add'
                  className='text-light hover:bg-main-dark hover:text-grey-light rounded-md px-3 py-2'
                >
                  Add Property
                </Link>
              </div>
            </div>
          </div>

          <div className='hidden md:block md:ml-6'>
            <div className='flex items-center'>
              <button
                className='flex items-center text-light bg-dark hover:bg-main-dark hover:text-grey-light rounded-md px-3 py-2'
              >
                <span className='uppercase'>Login or Register</span>
              </button>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
            <Link href='/messages' className='relative group'>
              <button
                type='button'
                className='notification-btn focus:outline-none'
              >
                <span className='absolute -inset-1.5'></span>
                <PiBellSimpleLight className='text-2xl' />
              </button>
              <span className='notification-text'>
                2
              </span>
            </Link>
            <div className='relative ml-3'>
              <div>
                <button
                  type='button'
                  className='user-menu-btn focus:outline-none'
                  id='user-menu-button'
                >
                  <span className='absolute -inset-1.5'></span>
                  <PiUserLight className='text-2xl ' />
                </button>
              </div>
              
              <div
                id='user-menu'
                className='user-menu focus: outline-none'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='user-menu-button'
                tabIndex='-1'
              >
                <Link
                  href='/profile'
                  className='user-menu-link'
                  role='menuitem'
                  tabIndex='-1'
                  id='user-menu-item-0'
                >
                  Your Profile
                </Link>
                <Link
                  href='/properties/saved'
                  className='user-menu-link'
                  role='menuitem'
                  tabIndex='-1'
                  id='user-menu-item-2'
                >
                  Saved Properties
                </Link>
                <button
                  className='user-menu-link'
                  role='menuitem'
                  tabIndex='-1'
                  id='user-menu-item-3'
                >
                  Log Out
                </button>
              </div>

            </div>
          </div>            
        </div>
      </div>
      <div id='mobile-menu' className='md:hidden'>
        <div className='space-y-1 px-2 pb-3 pt-2'>
          <Link
            href='/'
            className='text-light hover:text-grey-light hover:bg-main-dark block rounded-md px-3 py-2 text-base font-medium'
          >
            Home
          </Link>
          <Link
            href='/properties'
            className='text-light hover:text-grey-light hover:bg-main-dark block rounded-md px-3 py-2 text-base font-medium'
          >
            Properties
          </Link>
          <Link
            href='/properties/add'
            className='text-light hover:text-grey-light hover:bg-main-dark block rounded-md px-3 py-2 text-base font-medium'
          >
            Add Property
          </Link>
          <button
            className='flex items-center text-light bg-dark hover:bg-main-dark hover:text-grey-light rounded-md px-3 py-2 my-5'
          >
            <i className='fa-brands fa-google mr-2'></i>
            <span className='uppercase'>Login or Register</span>
          </button>
        </div>
      </div>       
    </nav>
  )
}
 
export default Navbar