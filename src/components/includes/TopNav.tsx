import React from 'react'

import '../../Assests/CSS/includes/topnav.css'

const TopNav: React.FC = () => {
  return (
    <div className='topnav-main'>
        <div className='topnav-inner'>
            <p className='highlighted'>Top</p>
            <p>Latest</p>
            <p>People</p>
            <p>Photos</p>
            <p>Vedios</p>
        </div>
        <div className='blue-bar'></div>
    </div>
  )
}

export default TopNav