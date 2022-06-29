import React, {useState} from "react";
import {Button,Modal} from 'react-bootstrap'
 
export default function Example(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [group, setGroup] = useState();
  const [course, setCourse] = useState();
  const [status_payment, setStatus] = useState();

  const handleClose = () => {
    props.onClick({data: {name: name, password: password, role: role, group: group, course: course, status_payment: status_payment }})
    setCourse("")
    setGroup("")
    setName("")
    setPassword("")
    setRole("")
    setStatus("")
    setShow(false);
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="fs-4 m-3" variant="outline-success" onClick={handleShow}>
        Add new row
      </Button>

      <Modal show={show} animation={false} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Element qo'shish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="form-control my-3 shadow p-2 fw-bold text-danger" onInput={(val) => setName(val.target.value)} type="text" placeholder="Ismingizni kiriting" />
          <input className="form-control my-3 shadow p-2 fw-bold text-danger" onInput={(val) => setPassword(val.target.value)} type="password" placeholder="Parolingizni kiriting" />
          <input className="form-control my-3 shadow p-2 fw-bold text-danger" onInput={(val) => setGroup(val.target.value)} type="text" placeholder="Guruhingizni kiriting" />
          <input className="form-control my-3 shadow p-2 fw-bold text-danger" onInput={(val) => setRole(val.target.value)} type="text" placeholder="Kasbingizni kiriting" />
          <input className="form-control my-3 shadow p-2 fw-bold text-danger" onInput={(val) => setCourse(val.target.value)} type="text" placeholder="Kursingizni kiriting" />
          <input className="form-control my-3 shadow p-2 fw-bold text-danger" onInput={(val) => setStatus(val.target.value)} type="text" placeholder="Statusingizni kiriting" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Saqlash
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
