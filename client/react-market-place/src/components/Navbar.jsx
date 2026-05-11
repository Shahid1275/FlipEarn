import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-800 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      <img
        src={assets.logo}
        alt="logo"
        className="h-10 cursor-pointer"
        onClick={() => {
          navigate('/')
          scrollTo(0, 0)
        }}
      />

      <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-4 md:gap-8 max-md:text-sm text-gray-800">
        <Link to='/' onClick={() => scrollTo(0, 0)} className="hover:text-gray-500/80 transition">
          Home
        </Link>
        <Link to='/marketplace' onClick={() => scrollTo(0, 0)} className="hover:text-gray-500/80 transition">
          Marketplace
        </Link>
        <Link to='/messages' onClick={() => scrollTo(0, 0)} className="hover:text-gray-500/80 transition">
          Messages
        </Link>
        <Link to='/my-listings' onClick={() => scrollTo(0, 0)} className="hover:text-gray-500/80 transition">
          My Listings
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          Get started
        </button>

        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
          </svg>
        </button>
      </div>

      <div className={`mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 ${isMenuOpen ? '' : 'hidden'} md:hidden`}>
        <div className="flex flex-col gap-4">
          <Link to='/' onClick={() => { setIsMenuOpen(false); scrollTo(0, 0) }} className="hover:text-gray-500/80 transition">
            Home
          </Link>
          <Link to='/marketplace' onClick={() => { setIsMenuOpen(false); scrollTo(0, 0) }} className="hover:text-gray-500/80 transition">
            Marketplace
          </Link>
          <Link to='/messages' onClick={() => { setIsMenuOpen(false); scrollTo(0, 0) }} className="hover:text-gray-500/80 transition">
            Messages
          </Link>
          <Link to='/my-listings' onClick={() => { setIsMenuOpen(false); scrollTo(0, 0) }} className="hover:text-gray-500/80 transition">
            My Listings
          </Link>
        </div>

        <button
          type="button"
          className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          Get started
        </button>
      </div>
    </nav>
  )
}

export default Navbar