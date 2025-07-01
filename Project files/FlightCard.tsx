'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plane, Clock, MapPin, Users, Star } from 'lucide-react'

interface Flight {
  id: number
  airline: string
  flightNumber: string
  from: string
  to: string
  departure: string
  arrival: string
  duration: string
  price: number
  stops: number
  logo: string
}

interface FlightCardProps {
  flight: Flight
}

export default function FlightCard({ flight }: FlightCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Flight Info */}
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <img 
              src={flight.logo} 
              alt={flight.airline}
              className="w-12 h-12 rounded-lg mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{flight.airline}</h3>
              <p className="text-sm text-gray-600">Flight {flight.flightNumber}</p>
            </div>
          </div>

          {/* Route Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="font-medium text-gray-900">{flight.from}</p>
                <p className="text-sm text-gray-600">{flight.departure}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className="w-8 h-px bg-gray-300"></div>
                <Plane className="h-4 w-4 text-primary-600 mx-2" />
                <div className="w-8 h-px bg-gray-300"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-end">
              <div className="text-right">
                <p className="font-medium text-gray-900">{flight.to}</p>
                <p className="text-sm text-gray-600">{flight.arrival}</p>
              </div>
            </div>
          </div>

          {/* Flight Details */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{flight.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}</span>
            </div>
          </div>
        </div>

        {/* Price and Actions */}
        <div className="flex flex-col items-end justify-between mt-4 lg:mt-0 lg:ml-8">
          <div className="text-right mb-4">
            <p className="text-3xl font-bold text-primary-600">${flight.price}</p>
            <p className="text-sm text-gray-600">per passenger</p>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn-secondary text-sm"
            >
              Details
            </button>
            <Link
              href={`/booking?flight=${flight.id}`}
              className="btn-primary text-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Flight Details</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Aircraft:</span> Boeing 787-9</p>
                <p><span className="font-medium">Seat Class:</span> Economy</p>
                <p><span className="font-medium">Baggage:</span> 1 checked bag included</p>
                <p><span className="font-medium">Meal:</span> Complimentary</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Cancellation Policy</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Free cancellation within 24 hours</p>
                <p>• 50% refund up to 7 days before departure</p>
                <p>• No refund within 7 days of departure</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 