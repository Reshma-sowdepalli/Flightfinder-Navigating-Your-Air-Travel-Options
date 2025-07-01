'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Plane, Menu, X, User, UserPlus, Search } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAuth(localStorage.getItem('ff1_logged_in') === 'true')
    }
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Flights', href: '/flights' },
    { name: 'Booking', href: '/booking' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleSignOut = () => {
    localStorage.removeItem('ff1_logged_in');
    window.location.reload();
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">FlightFinder</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/signup"
              className="btn-primary text-sm px-4 py-2 ml-2"
              style={{ marginLeft: '8px' }}
            >
              Sign Up
            </Link>
            {isAuth && (
              <button
                onClick={handleSignOut}
                className="text-gray-600 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 border border-red-200 rounded ml-2"
              >
                Sign Out
              </button>
            )}
          </nav>

          {/* Desktop Actions (Login only) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/signup"
                  className="btn-primary block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
                {/* Show Sign Out button only if logged in */}
                {isAuth && (
                  <button
                    onClick={handleSignOut}
                    className="text-gray-600 hover:text-red-600 block w-full px-3 py-2 text-base font-medium transition-colors duration-200 border border-red-200 rounded text-left"
                  >
                    Sign Out
                  </button>
                )}
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 