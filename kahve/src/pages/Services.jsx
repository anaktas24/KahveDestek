import React from 'react'
import BaristaTraining from '../components/BaristaTraining'
import Consulting from '../components/Consulting'
import TechnicSupport from '../components/TechnicSupport'
import Branding from '../components/Branding'
import ShopDesign from '../components/ShopDesign'

function Services() {
  return (
    <div className="space-y-12"> {/* Tailwind for spacing between sections */}
      <div id="barista-training">
        <BaristaTraining />
      </div>
      <div id="consulting">
        <Consulting />
      </div>
      <div id="technic-support">
        <TechnicSupport />
      </div>
      <div id="branding">
        <Branding />
      </div>
      <div id="shop-design">
        <ShopDesign />
      </div>
    </div>
  )
}

export default Services