import React from 'react'

const Nav = () => {
  return (

    <nav className="sm:px-4">
      {/* wood background */}
      <div className="flex flex-wrap text-center mx-auto">
        <h1 className="text-black font-semibold text-4xl flex m-auto logoFont">Carlisle Overhead Doors & Services</h1>
        <div className="flex m-auto">
          <ul className="flex flex-row p-4 text-black googleFont text-xl">
            <li>
              <a href="#" className="pr-5">Home</a>
            </li>
            <li>
              <a href="#" className="pr-5">About</a>
            </li>
            <li>
              <a href="#" className="pr-5">Services</a>
            </li>
            <li>
              <a href="#" className="pr-5">Gallery</a>
            </li>
            <li>
              <a href="#" className="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Nav