'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { PiBellSimpleLight, PiUserLight } from 'react-icons/pi'
import { TfiMenu } from 'react-icons/tfi'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  return ( 
    <nav className='bg-main border-b border-support'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative just-between h-20'>
          <div className='absolute inset-y-0 left-0 centre-items md:hidden'>
            <button
              type='button'
              id='mobile-dropdown-button'
              className='hamburger-btn focus:outline-none'
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className='absolute -inset-0.5'></span>
              <TfiMenu />
            </button>
          </div>
          <div className='flex items-center justify-center flex-1 md:items-stretch md:justify-start'>
            <Link className='centre-items flex-shrink-0' href='/'>
              <Image
                className='h-9 w-auto'
                src={logo}
                alt='Logo'
              />
              <span className='hidden md:block text-dark text-2xl ml-2 logo'>
                Longhouse
              </span>
            </Link>
            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2'>
                <Link
                  href='/'
                  className='nav-link'
                >
                  Home
                </Link>
                <Link
                  href='/properties'
                  className='nav-link'
                >
                  Properties
                </Link>
                <Link
                  href='/properties/add'
                  className='nav-link'
                >
                  Add Property
                </Link>
              </div>
            </div>
          </div>

          <div className='hidden md:block md:ml-6'>
            <div className='centre-items'>
              <button className='login-btn'>
                <span className='uppercase'>Login</span>
              </button>
            </div>
          </div>
          <div className='nav-control'>
            <Link
              href='/messages'
              className='relative group'
            >
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
                  onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                >
                  <span className='absolute -inset-1.5'></span>
                  <PiUserLight className='text-2xl' />           
                </button>
              </div>
                        
              <div
                id='user-menu'
                className={`
                  user-menu origin-top-right hover-transition
                  ${isProfileMenuOpen 
                    ? "opacity-100 scale-100 pointer-events-auto" 
                    : "opacity-0 scale-95 pointer-events-none"
                  }
                `}
                role='menu'
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

      <div
        id='mobile-menu'
        className={`
          overflow-hidden hover-transition 
          ${isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
          }
        `}        
      >
        <div className='space-y-1 px-2 pb-3 pt-2'>
          <Link
            href='/'
            className='block nav-link'
          >
            Home
          </Link>
          <Link
            href='/properties'
            className='block nav-link'
          >
            Properties
          </Link>
          <Link
            href='/properties/add'
            className='block nav-link'
          >
            Add Property
          </Link>
          <button className='login-btn my-5'>
            <span className='uppercase'>Login</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
 
export default Navbar