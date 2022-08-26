import React from 'react'
import { GiHomeGarage } from 'react-icons/gi'
import './Navbar.css'

const Navbar = () => {
  return (
    
<nav class="bg-blue-800 px-2 sm:px-4 py-2.5 googleFont">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" class="flex items-center hide">
        <GiHomeGarage className='text-4xl mr-2 text-white'/>
        <span class="self-center text-3xl font-semibold whitespace-nowrap text-white">Carlisle Overhead Doors & Services LLC</span>
    </a>
    <div class=" w-full md:block md:w-auto" id="navbar-default">
      <ul class="navResponsive flex flex-col p-4 mt-4 text-2xl rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
        <li>
          <a href="#service" class="navAResponsive font-semibold block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">Service</a>
        </li>
        <li>
          <a href="#residential" class="navAResponsive font-semibold block text-white py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">Residential</a>
        </li>
        <li>
          <a href="#commercial" class="navAResponsive font-semibold block text-white py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">Commercial</a>
        </li>
        <li>
          <a href="#gallery" class="navAResponsive font-semibold block text-white py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">Gallery</a>
        </li>
        <li>
          <a href="#contact" class="navAResponsive font-semibold block text-white py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar