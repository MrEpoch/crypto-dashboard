'use client';
import { useState } from "react";

export default function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-black sm:block hidden hover:bg-black/90 focus:ring-4 hover:blur-[3px] transition focus:outline-none focus:ring-black/80 font-medium rounded-lg text-sm px-4 py-2 text-center">Get started</button>
          <button onClick={() => setIsOpen(!isOpen)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 px-3 text-white hover:underline rounded md:bg-transparent  md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/news" className="block py-2 px-3 text-gray-900 hover:underline rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">News</a>
            </li>
            <li>
              <a href="/cryptoPrices" className="block py-2 px-3 text-gray-900 hover:underline rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Crypto Prices</a>
            </li>
            <li>
              <a href="/contact" className="block py-2 px-3 text-gray-900 hover:underline rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
      </div>
    </>
  )
}
