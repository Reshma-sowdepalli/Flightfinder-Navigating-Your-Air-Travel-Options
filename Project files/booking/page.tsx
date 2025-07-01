'use client'

import { useState } from 'react'
import { User, CreditCard, CheckCircle } from 'lucide-react'

export default function BookingPage() {
  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    passengers: 1
  })

  const [step, setStep] = useState(1)
  const [showDetails, setShowDetails] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Flight
          </h1>
          <p className="text-xl text-gray-600">
            Complete your booking in just a few steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center ${step >= 1 ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-300'}`}>
                1
              </div>
              <span className="ml-2 font-medium">Passenger Info</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className={`flex items-center ${step >= 2 ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-300'}`}>
                2
              </div>
              <span className="ml-2 font-medium">Payment</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className={`flex items-center ${step >= 3 ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-300'}`}>
                3
              </div>
              <span className="ml-2 font-medium">Confirmation</span>
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="card">
            <div className="flex items-center mb-6">
              <User className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Passenger Information</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.firstName}
                    onChange={(e) => setBookingData({...bookingData, firstName: e.target.value})}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.lastName}
                    onChange={(e) => setBookingData({...bookingData, lastName: e.target.value})}
                    className="input-field"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                    className="input-field"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button type="submit" className="btn-primary">
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="card">
            <div className="flex items-center mb-6">
              <CreditCard className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Payment Information</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={bookingData.cardNumber}
                  onChange={(e) => setBookingData({...bookingData, cardNumber: e.target.value})}
                  className="input-field"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={bookingData.expiryDate}
                    onChange={(e) => setBookingData({...bookingData, expiryDate: e.target.value})}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    value={bookingData.cvv}
                    onChange={(e) => setBookingData({...bookingData, cvv: e.target.value})}
                    className="input-field"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <button 
                  onClick={() => setStep(1)} 
                  className="btn-secondary"
                >
                  Back
                </button>
                <button 
                  onClick={() => setStep(3)} 
                  className="btn-primary"
                >
                  Complete Booking
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="card text-center">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-gray-600 mb-6">
              Your flight has been successfully booked. You will receive a confirmation email shortly.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600">Booking Reference: <span className="font-medium">FF123456789</span></p>
            </div>
            <button className="btn-primary" onClick={() => setShowDetails(!showDetails)}>
              View Booking Details
            </button>
            {showDetails && (
              <div className="mt-6 text-left bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-2">Booking Details</h3>
                <ul className="text-gray-700 space-y-1">
                  <li><b>Name:</b> {bookingData.firstName} {bookingData.lastName}</li>
                  <li><b>Email:</b> {bookingData.email}</li>
                  <li><b>Phone:</b> {bookingData.phone}</li>
                  <li><b>Passengers:</b> {bookingData.passengers}</li>
                  <li><b>Booking Reference:</b> FF123456789</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 