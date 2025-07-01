'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import FlightSearch from '@/components/FlightSearch'
import FlightCard from '@/components/FlightCard'

export default function FlightsPage() {
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: 'Delta Airlines',
      flightNumber: 'DL123',
      from: 'New York',
      to: 'London',
      departure: '10:30 AM',
      arrival: '10:45 PM',
      duration: '7h 15m',
      price: 450,
      stops: 0,
      logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      airline: 'British Airways',
      flightNumber: 'BA456',
      from: 'New York',
      to: 'London',
      departure: '2:15 PM',
      arrival: '6:30 AM',
      duration: '7h 15m',
      price: 520,
      stops: 0,
      logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      airline: 'American Airlines',
      flightNumber: 'AA789',
      from: 'New York',
      to: 'London',
      departure: '8:45 PM',
      arrival: '1:00 PM',
      duration: '7h 15m',
      price: 380,
      stops: 1,
      logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop'
    }
  ])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('ff1_logged_in') === 'true'
      setIsAuth(loggedIn)
      // No redirect here, just show/hide content
    }
  }, [])

  // Handler to be called when the user clicks Search Flights
  const handleSearch = () => {
    setHasSearched(true)
    // Optionally, filter/set flights here based on search criteria
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Search Flights
          </h1>
          <p className="text-xl text-gray-600">
            Find the perfect flight for your journey
          </p>
        </div>

        {/* Conditionally render search section if authenticated */}
        {isAuth ? (
          <>
            {/* Flight Search */}
            <div className="mb-12">
              <FlightSearch onSearch={handleSearch} />
            </div>

            {/* Flight Results - only show after search */}
            {hasSearched && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Available Flights
                  </h2>
                  <div className="text-sm text-gray-600">
                    {flights.length} flights found
                  </div>
                </div>

                <div className="space-y-4">
                  {flights.map((flight) => (
                    <FlightCard key={flight.id} flight={flight} />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-lg text-gray-500 py-16">
            Please sign up to search for flights.
          </div>
        )}
      </div>
    </div>
  )
} 