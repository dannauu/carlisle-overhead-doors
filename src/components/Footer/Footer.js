import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (

    <footer className="p-4 bg-white border-t-4 border-blue-400 sm:p-6 flex justify-center">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-blue-500">© 2022 <a href="/" className="hover:underline">Carlisle Overhead Doors & Services ™</a>. All Rights Reserved.</span>
          <a href='https://www.facebook.com/Carlisleoverheaddoors' target="_blank" className='text-2xl pl-5 text-blue-800'><FaFacebookSquare/></a>
        </div>
    </footer>

  )
}

export default Footer