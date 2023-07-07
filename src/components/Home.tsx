import React, { useState } from 'react'

import Sidebar from './includes/Sidebar'
import Timeline from './includes/Timeline'
import Extras from './includes/Extras'

import '../Assests/CSS/home.css'

const Home: React.FC = () => {

  const [inputs, setInputs] = useState<any>({
      fromDate: '',
      toDate: ''
  })

  const filterHandler = (obj: any) => {

      setInputs({
        fromDate: obj.fromDate,
        toDate: obj.toDate
      })
  }


  return (
    <div className='home-main'>
        <Sidebar />
        <Timeline inputs={inputs} />
        <Extras filterHandler={filterHandler}/>
    </div>
  )
}

export default Home