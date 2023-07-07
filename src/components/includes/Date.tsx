import React, { useRef } from 'react'

import '../../Assests/CSS/includes/date.css'

const months= ["January","February","March","April","May","June","July","August","September","October","November","December"];

type Props = {
    isOpenSetHandler: React.Dispatch<React.SetStateAction<Boolean>>;
    filterHandler:React.Dispatch<React.SetStateAction<any>>;
}

const Date: React.FC<Props> = ({ isOpenSetHandler, filterHandler }: Props) => {

    const fromMonth = useRef<HTMLSelectElement>(null)
    const fromDay = useRef<HTMLSelectElement>(null)
    const fromYear = useRef<HTMLSelectElement>(null)
    const toMonth = useRef<HTMLSelectElement>(null)
    const toDay = useRef<HTMLSelectElement>(null)
    const toYear = useRef<HTMLSelectElement>(null)

    const inputsHandler = () => {

        if(toYear.current?.value && toMonth.current?.value && toDay.current?.value && fromYear.current?.value && fromMonth.current?.value && fromDay.current?.value){

            isOpenSetHandler(false)

            const toDate = toYear.current?.value + '-' + (toMonth.current?.value.length === 1 ? '0': '') + toMonth.current?.value + '-' + (toDay.current?.value.length === 1 ? '0' : '') + toDay.current?.value
            const fromDate = fromYear.current?.value + '-' + (fromMonth.current?.value.length === 1 ? '0' : '') + fromMonth.current?.value + '-' + (fromDay.current?.value.length === 1 ? '0' : '') + fromDay.current?.value

            filterHandler({toDate: toDate, fromDate: fromDate})

        } else {
            alert("Fill all the inputs")
        }

    }

  return (
    <div className='date-main'>
        <div className='date-inner'>
            <div className='heading'>
                <div>
                    <svg onClick={() => {isOpenSetHandler(false)}} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{color: 'rgb(239, 243, 244)'}}><g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>
                    <p>Advanced Search</p>
                </div>
                <button onClick={inputsHandler}>Search</button>
            </div>
            <div className='date-filter'>
                <h4>Dates</h4>
                <div>
                    <p>From</p>
                    <div>
                        <select ref={fromMonth} className='months'>
                            <option value=""></option>
                            {months.map((each,index) => (
                                <option key={index} value={index+1}>{each}</option>
                            ))}
                        </select>
                        <select ref={fromDay} className='days'>
                            <option value=""></option>
                            {[...Array(31)].map((each, index) => (
                                <option key={index} value={index+1}>{index+1}</option>
                            ))}
                        </select>
                        <select ref={fromYear} className='years'>
                            <option value=""></option>
                            {[...Array(18)].map((each, index) => (
                                <option key={index} value={index+2006}>{index+2006}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <p>To</p>
                    <div>
                        <select ref={toMonth} className='months'>
                            <option value=""></option>
                            {months.map((each, index) => (
                                <option key={index} value={index+1}>{each}</option>
                            ))}
                        </select>
                        <select ref={toDay} className='days'>
                            <option value=""></option>
                            {[...Array(31)].map((each, index) => (
                                <option key={index} value={index+1}>{index+1}</option>
                            ))}
                        </select>
                        <select ref={toYear} className='years'>
                            <option value=""></option>
                            {[...Array(18)].map((each, index) => (
                                <option key={index} value={index+2006}>{index+2006}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Date