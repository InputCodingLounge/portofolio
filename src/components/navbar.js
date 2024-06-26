import React, { useState, useContext } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../App';

const navigation = [
  { name: 'Profile', href: './midle',  },
  { name: 'Projects', href: '/projects',  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext); // Use context
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isGithubScaled, setIsGithubScaled] = useState(false);
  const [isLinkedinScaled, setIsLinkedinScaled] = useState(false);
  const [isCallScaled, setIsCallScaled] = useState(false);
  const [isEmailScaled, setIsEmailScaled] = useState(false);


 

  const handleGithubMouseEnter = () => setIsGithubScaled(true);
  const handleGithubMouseLeave = () => setIsGithubScaled(false);
  const handleLinkedinMouseEnter = () => setIsLinkedinScaled(true);
  const handleLinkedinMouseLeave = () => setIsLinkedinScaled(false);
  const handleEmailMouseEnter = () => setIsEmailScaled(true);
  const handleEmailMouseLeave = () => setIsEmailScaled(false);
  const handleCallMouseEnter = () => setIsCallScaled(true);
  const handleCallMouseLeave = () => setIsCallScaled(false);

  return (
    <Disclosure as="nav" className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center  animate-slideInLeft justify-center sm:items-stretch sm:justify-start ">
                <div className="flex-shrink-0 flex items-center"></div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href} 
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-b hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-3 sm:static sm:inset-auto sm:ml-2 sm:pr-0 animate-slideInRight">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="text-gray-400 hover:text-white focus:outline-none mr-4"
                >
                  {isDarkMode ? (
                    <SunIcon className="h-6 w-6" />
                  ) : (
                    <MoonIcon className="h-6 w-6" />
                  )}
                </button>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-400 hover:text-white focus:outline-none sm:hidden"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
                <div className="hidden sm:flex items-center space-x-3">
                  <a
                    href="https://github.com/"
                    target=" _blank"
                    rel="noreferrer"
                    onMouseEnter={handleGithubMouseEnter}
                    onMouseLeave={handleGithubMouseLeave}
                  >
                    <img
                      className={`h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 ${
                        isGithubScaled ? 'scale-110' : ''
                      }`}
                      src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/github%20(1).png?alt=media&token=eb89d9c4-1c80-4be8-8124-fc6dceb7add8"
                      alt="GitHub Icon"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={handleLinkedinMouseEnter}
                    onMouseLeave={handleLinkedinMouseLeave}
                  >
                    <img
                      className={`h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 ${
                        isLinkedinScaled ? 'scale-110' : ''
                      }`}
                      src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/linkedin%20(1).png?alt=media&token=605eab92-1812-4fde-a52b-fa278997c678"
                      alt="LinkedIn Icon"
                    />
                  </a>
                  <a
                    href="mailto:youremail@youremail.com"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={handleEmailMouseEnter}
                    onMouseLeave={handleEmailMouseLeave}
                  >
                    <img
                       className={`h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 ${
                        isEmailScaled ? 'scale-110' : ''
                      } ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}
                      src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/mail.png?alt=media&token=6279881c-fd50-4212-88dc-9a6a11fdf4d9"
                      alt="Email Icon"
                    />
                  </a>
                  <a
                    href="tel:+431111111111"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={handleCallMouseEnter}
                    onMouseLeave={handleCallMouseLeave}
                  >
                    <img
                      className={`h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 ${
                        isCallScaled ? 'scale-110' : ''
                      } ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}
                      src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/material.png?alt=media&token=7c35062f-4839-4fa8-96af-69eeee22a585"
                      alt="Phone Icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Transition
            show={open}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
           <Disclosure.Panel className={`sm:hidden ${isDarkMode ? 'text-white' : 'text-black'}`}>
           <div className="px-2 pt-2 pb-3 space-y-1">
  {navigation.map((item) => (
    <Link
      key={item.name}
      to={item.href}
      className={classNames(
        item.current ? 'bg-gray-900 text-white' : 'text-black',
        isDarkMode ? 'text-white' : 'text-black',
        'hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
      )}
      aria-current={item.current ? 'page' : undefined}
    >
      {item.name}
    </Link>
  ))}
</div>

</Disclosure.Panel>

          </Transition>
          {isDropdownOpen && (
  <div className={`sm:hidden absolute right-0 mt-2 w-48 rounded-md overflow-hidden z-10 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
    <Link to="https://github.com/" className={`block px-4 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} hover:text-white`}>
      GitHub
    </Link>
    <Link to="https://www.linkedin.com" className={`block px-4 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} hover:text-white`}>
      LinkedIn
    </Link>
    <Link to="mailto:youremail@youremail.com" className={`block px-4 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} hover:text-white`}>
      Email
    </Link>
    <Link to="tel:+441111111111" className={`block px-4 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} hover:text-white`}>
      Phone
    </Link>
  </div>
)}



        </>
      )}
    </Disclosure>
  );
}