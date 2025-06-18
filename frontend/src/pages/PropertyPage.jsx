import React from 'react'
import Navbar from '../components/Navbar'
import AllProperty from '../components/AllProperty'
import Footer from '../components/Footer'
import Discuss from '../components/Discuss'

import { Properties } from '../json/landingPageData' 

const PropertyPage = () => {
  return (
<div>
    {/* <Navbar /> */}
    <AllProperty data={Properties} />
    <Discuss />
    <Footer />
</div>
  )
}

export default PropertyPage