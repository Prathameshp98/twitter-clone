import React from 'react'

import Sidebar from './includes/Sidebar'
import Timeline from './includes/Timeline'
import Extras from './includes/Extras'

import '../Assests/CSS/home.css'

const Home: React.FC = () => {
  return (
    <div className='home-main'>
        <Sidebar />
        <Timeline />
        <Extras />
    </div>
  )
}

export default Home