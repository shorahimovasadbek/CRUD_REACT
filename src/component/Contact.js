import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

export default function Contact() {
  const [name, setName] = useState("")
  const [last, setLast] = useState("")
  const [job, setJob] = useState("")
  const [number, setNum] = useState("")
  const dispatch = useDispatch()
  
  function Add_Fun(){
    dispatch({type:"add", payload: {name: name, last: last, job: job, number: number}})
  }

  return (
    <div className='container my-5'>
      <div className='row '>
        <div className='col'>
          <input onInput={(val) => setName(val.target.value)} className='fs-5 form-control shadow' type="text" placeholder='Name'/>
        </div>
        <div className='col'>
          <input onInput={(val) => setLast(val.target.value)} className='fs-5 form-control shadow' type="text" placeholder='LastName'/>
        </div>
        <div className='col'>
          <input onInput={(val) => setJob(val.target.value)} className='fs-5 form-control shadow' type="text" placeholder='Job'/>
        </div>
        <div className='col'>
          <input onInput={(val) => setNum(val.target.value)} className='fs-5 form-control shadow' type="number" placeholder='Number'/>
        </div>
        <div className='col'>
          <button onClick={Add_Fun} className='form-control btn btn-primary fs-5 fw-bold shadow text-dark'>Add</button>
        </div>
      </div>
      <div className='row'>
        
      </div>
    </div>
  )
}

