import React from 'react'

import '../../Assests/CSS/includes/extras.css'

const Extras: React.FC = () => {
  return (
    <div className='extras-main'>
        <div className='extras-inner'>
            <div className='search-filter'>
                <p>Search Filter</p>
            </div>
            <div className='filter'>
                <div className='people'>
                    <h6>People</h6>
                    <div>
                        <p>From anyone</p>
                        {/* <input type='radio' /> */}
                    </div>
                    <div>
                        <p>People you follow</p>
                    </div>
                </div>
                <div className='location'>
                    <h6>Location</h6>
                    <div>
                        <p>Anywhere</p>
                    </div>
                    <div>
                        <p>Near you</p>
                    </div>
                </div>
                <p className='advanced'>Advanced Search</p>
            </div>
        </div>
    </div>
  )
}

export default Extras