import React, { useState } from 'react'
import axios from 'axios'

function OtpPage() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOTP] = useState('')
  const [verificationStatus, setVerificationStatus] = useState('')

  const handleSendOTP = async () => {
    try {
      await axios.post('http://localhost:3141/send-otp', { phoneNumber })
      setVerificationStatus('OTP sent successfully')
    } catch (error) {
      setVerificationStatus('Failed to send OTPPPP')
    }
  }

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('http://localhost:3141/verify-otp', { phoneNumber, otp })
      if (response.data.valid) {
        setVerificationStatus('OTP verified successfully')
      } else {
        setVerificationStatus('OTP verification failed')
      }
    } catch (error) {
      setVerificationStatus('OTP verification failed')
    }
  }

  return (
    <div>
      <h2>OTP Verification</h2>
      <div>
        <input
          type='text'
          placeholder='Enter your phone number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={handleSendOTP}>Send OTP</button>
      </div>
      <div>
        <input type='text' placeholder='Enter OTP' value={otp} onChange={(e) => setOTP(e.target.value)} />
        <button onClick={handleVerifyOTP}>Verify OTP</button>
      </div>
      <p>{verificationStatus}</p>
    </div>
  )
}

export default OtpPage
