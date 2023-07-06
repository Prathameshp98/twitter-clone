import React from 'react'

import '../../Assests/CSS/includes/timeline.css'

import SearchBox from './SearchBar'
import TopNav from './TopNav'
import Post from './Post'

const Timeline: React.FC = () => {
  return (
    <div className='timeline-main'>
        <div className='timeline-inner'>
            <SearchBox />
            <TopNav />
            <Post />
        </div>
    </div>
  )
}

export default Timeline