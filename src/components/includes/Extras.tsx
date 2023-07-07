import React, { useState } from 'react'

import '../../Assests/CSS/includes/extras.css'

import Date from './Date'

import Oval from '../../Assests/Images/oval.webp';

type Props = {
    filterHandler:React.Dispatch<React.SetStateAction<any>>;
}

const Extras: React.FC<Props>= ({ filterHandler }: Props) => {

    const[isOpen, isOpenSet] = useState<Boolean>(false)


    const searchHandler = () => {
        isOpenSet(!isOpen)
    }

    const isOpenSetHandler = () => {
        isOpenSet(false)
    }

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
                        <img src={Oval} alt="" />
                    </div>
                    <div>
                        <p>People you follow</p>
                        <img src={Oval} alt="" />
                    </div>
                </div>
                <div className='location'>
                    <h6>Location</h6>
                    <div>
                        <p>Anywhere</p>
                        <img src={Oval} alt="" />
                    </div>
                    <div>
                        <p>Near you</p>
                        <img src={Oval} alt="" />
                    </div>
                </div>
                <p className='advanced' onClick={searchHandler}>Advanced Search</p>
            </div>
        </div>
        {isOpen && <Date isOpenSetHandler={isOpenSetHandler} filterHandler={filterHandler}/>}
    </div>
  )
}

export default Extras