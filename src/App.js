import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Contact from './component/Contact';
import Render from './component/Render';

// import AddNewModal from '../components/AddNewModal'
function App() {
return( 
  <div>
    <Contact/>
     <Render/>
  </div>
);


































  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get("https://myjson.dit.upm.es/api/bins/h8pl")
  //   .then(res => {
  //     setData(res.data)
  //     console.log(res.data);
  //   })
  //   .catch(err => {
  //     alert("ishlamadi")
  //   })
  // }, []);
  
  // function ishla(newData){
  //   let currentData = [...data]
  //   currentData.push({
  //     id: data.length + 1,
  //     name: newData.data.name,
  //     password: newData.data.password,
  //     role: newData.data.role,
  //     group: newData.data.group,
  //     course: newData.data.course,
  //     status_payment: newData.data.status_payment
  //   })
  //   setData(currentData)
  // }

  // function ochir(index){
  //   let current = [...data]
  //   current.splice(index,1)
  //   setData(current)
  // }

  // return (
  //   <div className="table">
  //   <AddNewModal onClick={ishla} />
  //   <table>
  //   <thead>
  //   <tr key="">
  //   <th>ID</th>
  //   <th>Name</th>
  //   <th>Password</th>
  //   <th>Role</th>
  //   <th>Group</th>
  //   <th>Course</th>
  //   <th>status_payment</th>
  //   <th>Delete</th>
  //   </tr>
  //   </thead>
  //   <tbody>
  //   {
  //     (data.length>0) && data.map((item, index) => {
  //       return(
  //         <tr key={index}>
  //         <td>{item.id} {" 😁"}</td>
  //         <td>{item.name}</td>
  //         <td>{item.password}</td>
  //         <td>{item.role}</td>
  //         <td>{item.group}</td>
  //         <td>{item.course}</td>
  //         <td>{item.status_payment}</td>
  //         <td>
  //         <button onClick={() =>  ochir(index)} className='btn btn-danger form-control'>Del</button>
  //         </td>
  //         </tr>
  //         )
  //       })
  //     }
  //     </tbody>
  //     </table>
  //     </div>
  //     );
    }
    
    export default App;
    