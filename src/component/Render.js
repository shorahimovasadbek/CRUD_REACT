import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Modal, Button,} from 'react-bootstrap'


export default function Render() {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [last, setLast] = useState("")
  const [job, setJob] = useState("")
  const [number, setNum] = useState("")
  const [index, setIndex] = useState(0)

  
  
  const [show, setShow] = useState(false);
  
  
  function handleShow(index) {
    setShow(true);
    
    setName(info.info[index].name)
    setLast(info.info[index].last)
    setJob(info.info[index].job)
    setNum(info.info[index].number)
    setIndex(index)
  }

  function handleClose() {
    setShow(false);
    dispatch({type: "edit", payload:{name: name, last: last, job: job, number: number, index: index}})
  }
  
  const {info} = useSelector(state => state)

  return (
    <div className='container'>
      <div className='row'>
      {
        (info.info.length>0) && info.info.map((item, index) =>{
           return (
            <div key={index} className='col-12 d-flex justify-content-around align-items-center text-center'>
              <h4 className='fs-4 my-2 fw-bold text-primary shadow p-3 rounded rounded-3 w-25 mx-2'>{item.name}</h4>
              <h4 className='fs-4 my-2 fw-bold text-primary shadow p-3 rounded rounded-3 w-25 mx-2'>{item.last}</h4>
              <h4 className='fs-4 my-2 fw-bold text-primary shadow p-3 rounded rounded-3 w-25 mx-2'>{item.job}</h4>
              <h4 className='fs-4 my-2 fw-bold text-primary shadow p-3 rounded rounded-3 w-25 mx-2'>{item.number}</h4>
              <button onClick={() => handleShow(index)} className='btn btn-outline-warning fs-4 fw-bold border-dark py-2'>Tahrirlash</button>
              <button onClick={() => dispatch({type: "delete", payload: {index}})}  className='btn btn-outline-warning fs-4 fw-bold border-dark py-2'>O'chirish</button>
            </div>
            )
          })
        }
        </div>
        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tahrirlash</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row '>
          <div className='col-12 my-3'>
            <input onInput={(val) => setName(val.target.value)} defaultValue={name} className='fs-5 form-control shadow' type="text" placeholder='Name'/>
          </div>
          <div className='col-12 my-3'>
            <input onInput={(val) => setLast(val.target.value)} defaultValue={last} className='fs-5 form-control shadow' type="text" placeholder='LastName'/>
          </div>
          <div className='col-12 my-3'>
            <input onInput={(val) => setJob(val.target.value)} defaultValue={job} className='fs-5 form-control shadow' type="text" placeholder='Job'/>
          </div>
          <div className='col-12 my-3'>
            <input onInput={(val) => setNum(val.target.value)} defaultValue={number} className='fs-5 form-control shadow' type="number" placeholder='Number'/>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Saqlash
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
