import React from 'react'
import './PrivacyPolicy.css'
import { Container } from 'react-bootstrap'
import {FaAngleDoubleRight } from 'react-icons/fa';
const PrivacyPolicy = () => {
  return (
    <>
    <Container>
    <div className='privacy-policy'>
      <h1>Privacy Policy</h1>
    <p><FaAngleDoubleRight/>  At ShareWolves, we are committed to protecting the privacy of our webinar attendees from Mumbai and beyond. The policy outlines our practies concerning the collection, use and disclouser of your information when you use our service and the choices you have associated with that data. </p>
    <p><FaAngleDoubleRight/>  We collect various types of information  for various purposes to provide and  improve our service to you. This include, but is not limited to, personal identification information(name, email, address), uses data and cookies</p>
    <p><FaAngleDoubleRight/>  We will not share your information with any third parties except as necessary to provide our services, comply with the low, or project our rights.</p>
    <p><FaAngleDoubleRight/>  Your information is stored securely and is only accessible by authorized personnel. You have the right to access, amend, or delete your personal information at any time by contacting us directly. </p>
    <p><FaAngleDoubleRight/>  This policy is governed by the laws of India, and we reserve the right to update it as necessary to reflect changes our practies or legel requirements.</p>
    </div>
    </Container>
    </>
  )
}

export default PrivacyPolicy
