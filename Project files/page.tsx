'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plane, Search, MapPin, Calendar, Users, ArrowRight, Star, Shield, Clock, Globe } from 'lucide-react'
// import FlightSearch from '@/components/FlightSearch'

export default function HomePage() {
  const [userName, setUserName] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAuth(localStorage.getItem('ff1_logged_in') === 'true')
      setUserName(localStorage.getItem('ff1_name') || '')
    }
  }, [])

  const features = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find the best flights with our intelligent search algorithm'
    },
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Your data is protected with bank-level security'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Get help anytime with our round-the-clock customer service'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Access flights from airlines worldwide'
    }
  ]

  const popularDestinations = [
    { city: 'New York', country: 'USA', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop' },
    { city: 'London', country: 'UK', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop' },
    { city: 'Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop' },
    { city: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop' }
  ]

  return (
    <div className="min-h-screen">
      {/* Welcome message if signed in */}
      {isAuth && userName && (
        <div className="w-full bg-primary-50 text-primary-700 text-center py-3 font-semibold text-lg">
          Welcome, {userName}!
        </div>
      )}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Navigate Your Air Travel Options
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto animate-slide-up">
              Find and book the best flights with FlightFinder. Compare prices, routes, and airlines for your perfect journey.
            </p>
            {/* FlightSearch removed from homepage */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FlightFinder?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make your travel planning effortless with our comprehensive flight search and booking platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600">
              Discover amazing places around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={destination.image} 
                  alt={`${destination.city}, ${destination.country}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{destination.city}</h3>
                  <p className="text-primary-200">{destination.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 