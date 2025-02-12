import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import svgTop from '../assets/images/dark-wave-haikei-up.svg'
import svgBottom from '../assets/images/dark-wave-haikei-down.svg'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Header from '../layouts/appointment/Header'
import Form from '../layouts/appointment/Form'

const Appointment = () => {

  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000
    });

  }, []);

  return (
    <>
      <Navbar />
      <Header />

      {/* Content */}
      <div className="xl:mt-16 relative z-30">
        {/* SVG TOP */}
        <div>
            <img src={svgTop} alt="Wave svg" title="Wave SVG"/>
        </div>

        {/* MAIN CONTENT */}
        <main className="bg-whity">
          <div className="max-w-screen-xl mx-auto px-4">
            <Form />
          </div>
        </main>

        {/* SVG BOTTOM */}
        <div>
            <img src={svgBottom} alt="Wave svg" title="Wave SVG"/>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Appointment