import React from 'react'

import '../../Assests/CSS/includes/timeline.css'

import SearchBox from './SearchBar'
import TopNav from './TopNav'
import Post from './Post'

interface Props {
    inputs: any
}

const Timeline: React.FC<Props> = ({ inputs }: Props) => {

  return (
    <div className='timeline-main'>
        <div className='timeline-inner'>
            <SearchBox />
            <TopNav />
            <Post inputs={inputs} />
        </div>
    </div>
  )
}

export default Timeline