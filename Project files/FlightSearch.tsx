'use client'

import { useState, useEffect } from 'react'
import { Search, MapPin, Calendar, Users, Plane } from 'lucide-react'
import Link from 'next/link'

interface FlightSearchProps {
  onSearch?: () => void
  isAuth?: boolean
}

export default function FlightSearch({ onSearch, isAuth }: FlightSearchProps) {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1,
    tripType: 'roundtrip'
  })
  const [userName, setUserName] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isAuth) {
        setUserName(localStorage.getItem('ff1_name') || '')
      } else {
        setUserName('')
      }
    }
  }, [isAuth])

  if (isAuth === false) {
    return (
      <div className="text-center text-lg text-gray-500 py-8">
        Please sign in to search for flights.
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    if (onSearch) onSearch()
    console.log('Search data:', searchData)
  }

  const popularCities = [
    'Hyderabad', 'Bangalore', 'Chennai', 'Mumbai', 'Delhi', 'Kolkata', 'Pune', 'Ahmedabad', 'Kochi', 'Jaipur', 'Lucknow', 'Visakhapatnam', 'Coimbatore', 'Surat', 'Bhopal', 'Indore',
    'New York', 'London', 'Tokyo', 'Paris', 'Sydney', 'Dubai', 'Singapore'
  ]

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
      {/* Show user name if available */}
      {userName && (
        <div className="mb-4 text-primary-700 font-semibold text-lg text-center">
          Welcome, {userName} 👋
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Trip Type Selection */}
        <div className="flex space-x-4 mb-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="tripType"
              value="roundtrip"
              checked={searchData.tripType === 'roundtrip'}
              onChange={(e) => setSearchData({...searchData, tripType: e.target.value})}
              className="mr-2"
            />
            <span className="text-gray-700">Round Trip</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="tripType"
              value="oneway"
              checked={searchData.tripType === 'oneway'}
              onChange={(e) => setSearchData({...searchData, tripType: e.target.value})}
              className="mr-2"
            />
            <span className="text-gray-700">One Way</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* From */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Departure City"
                value={searchData.from}
                onChange={(e) => setSearchData({...searchData, from: e.target.value})}
                className="input-field pl-10"
                list="cities"
              />
              <datalist id="cities">
                {popularCities.map(city => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>
          </div>

          {/* To */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Destination City"
                value={searchData.to}
                onChange={(e) => setSearchData({...searchData, to: e.target.value})}
                className="input-field pl-10"
                list="cities"
              />
            </div>
          </div>

          {/* Date */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={searchData.date}
                onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                className="input-field pl-10"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          {/* Passengers */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Passengers
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={searchData.passengers}
                onChange={(e) => setSearchData({...searchData, passengers: parseInt(e.target.value)})}
                className="input-field pl-10"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2 text-lg"
          >
            <Search className="h-5 w-5" />
            <span>Search Flights</span>
          </button>
        </div>
      </form>

      {/* Quick Links */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="text-gray-600">Popular:</span>
          {popularCities.slice(0, 4).map(city => (
            <button
              key={city}
              onClick={() => setSearchData({...searchData, from: city})}
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 