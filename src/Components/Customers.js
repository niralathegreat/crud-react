import React, {useEffect, useState} from 'react'
//import Customer from './Customer'
import EditCustomer from './EditCustomer'
import { Button} from 'react-bootstrap';
import { Routes,Route, Link, Navigate,withRouter,useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar"
import Modal from 'react-bootstrap/Modal';
 
// https://dev.to/fromwentzitcame/working-with-tables-in-react-how-to-render-and-edit-fetched-data-5fl5
/*
1. view dat in popup 
2. pagination
3. hide success msg
*/


function Customers() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [msg, setMsg] = useState([]);
  const [count, setCount] = useState(0);
  /* if(sessionStorage.getItem("error-msg") !== ''){
      setMsg(sessionStorage.getItem("error-msg"));
      sessionStorage.setItem("error-msg", "");
  }
  if(sessionStorage.getItem("succ-msg") !== ''){
    setMsg(sessionStorage.getItem("succ-msg"));
    sessionStorage.setItem("succ-msg", "");
}*/

  
  useEffect(() => {
    fetch("http://localhost:3001/customers/")
	  .then(async res => {
			const obj = await res.json(); 
			if(obj.status === 'success'){
				setCustomers(obj.data);
			}
	  }).catch(() => {
		  console.log('error');
	  });
  }, [count]);

  function deleteCustomer(id){
    fetch(`http://localhost:3001/customers/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type" : "application/json"
      },
      //body: JSON.stringify({ name: name, email: email, phone: phone })
  })
  .then(resp => {
      return resp.json();
  }).then(obj => {
      console.log(obj);
      console.log(obj.status);
      if(obj.status === 'success'){
          console.log("Customer deleted successfully");
          sessionStorage.setItem("succ-msg", "Customer deleted successfully");
          setCount((count) => count + 1);
          //navigate('/customers');
          //navigate('/customers', { replace: true });
          //return <Navigate to="/customers" />;
      }else{
          console.log("Something went wrong to deleted customers");
          sessionStorage.setItem("error-msg", "Something went wrong to deleted customers");
          //navigate('/customers', { replace: true });
          setCount((count) => count + 1);
      }
  })
  }

  function viewCustomer(id){
    console.log('ccc:'+id);
    return (
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
    
    //navigate('/editcustomer');
    //return EditCustomer;
    //return <EditCustomer id={id} />
    //return <Navigate to="/editcustomer" />;
    //return <Route path="/editcustomer" element={<EditCustomer />} />;
    
    //console.log('ddd:'+id);
    /* fetch("http://localhost:3001/customers/"+id)
	  .then(async res => {
			const obj = await res.json(); 
			if(obj.status === 'success'){
        console.log(obj.data);
				//setCustomers(obj.data);
			}
	  }).catch(() => {
		  console.log('error');
	  }); */

  }

  function ModalDialog() {
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!false)
  }
  return (
    <>
      <Button variant="success" onClick={initModal}>
        Open Modal
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <Button variant="dark" onClick={initModal}>
            Store
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

  
 

  return (

    <div>
    <header>
      <h2>CRUD Operations</h2>
    </header>

    <section>
      <nav>
        <strong>Sidebar</strong>
        <ul>
          <Sidebar />
        </ul>
      </nav>
      
      <article>
      <p className='fright'><Link to="/dashboard">Back to dashboard</Link></p>
		  <p>{msg} {sessionStorage.getItem("succ-msg")}</p>
		  <p>{sessionStorage.getItem("error-msg")}</p>
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Modify Customer</th>
            </tr>
          </thead>
          <tbody>
              { customers.map(customer =>
                <tr key = {customer.id}>
                  <td> { customer.id} </td>
                  <td> { customer.name} </td>   
                  <td> {customer.email}</td>
                  <td> {customer.phone}</td>
                  <td>
                      <Link to={`/editcustomer/${customer.id}`} className="btn btn-info"> Edit </Link>
                      {/* <Link to={"/editcustomer/"+customer.id} className="btn btn-info"> Edit </Link> */}
                      <button style={{marginLeft: "10px"}} onClick={ () => deleteCustomer(customer.id)} className="btn btn-danger">Delete </button>
                      
                      <button style={{marginLeft: "10px"}} onClick={ () => viewCustomer(customer.id)} className="btn btn-info">View </button>
                  </td>
              </tr>
                ) }
          </tbody>
        </table>
      </article>
        
    </section>

    <footer>
      <p>Footer</p>
    </footer>
  </div>

      
   )
}
export default Customers

