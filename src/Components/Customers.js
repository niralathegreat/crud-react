import React, {useEffect, useState} from 'react'
import Customer from './Customer'
import EditCustomer from './EditCustomer'
import { Button} from 'react-bootstrap';
import { Link, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar"

//function Customers({customers, onUpdateCustomer}) {
function Customers() {
  // state for conditional render of edit form
  const [isEditing, setIsEditing] = useState(false);
  //const [isLoggedin, setIsLoggedin] = useState(false);
  const [customers, setCustomers] = useState([]);
  // first data grab
  useEffect(() => {
    fetch("http://localhost:3001/customers/")
      .then((resp) => resp.json())
      .then((res) => {
        //console.log(res.data)
        setCustomers(res.data)
      });
  }, []);
  
  // state for edit form inputs
  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: ""
  })
  
  /* const logout = () => {
	console.log('logout');
    localStorage.removeItem('token-info');
    setIsLoggedin(false);
  }; */

  // when PATCH request happens; auto-hides the form, pushes changes to display
  function handleCustomerUpdate(updatedCustomer) {
      setIsEditing(false);
      //onUpdateCustomer(updatedCustomer);
    }

  // capture user input in edit form inputs
  function handleChange(e) {
    setEditForm({
    ...editForm,
    [e.target.name]: e.target.value
    })
  }

  // needed logic for conditional rendering of the form - shows the customer you want when you want them, and hides it when you don't
  function changeEditState(customer) {
    if (customer.id === editForm.id) {
      setIsEditing(isEditing => !isEditing) // hides the form
    } else if (isEditing === false) {
      setIsEditing(isEditing => !isEditing) // shows the form
    }
  }

  // capture the customer you wish to edit, set to state
  function captureEdit(clickedCustomer) {
    let filtered = customers.filter(customer => customer.id === clickedCustomer.id)
    setEditForm(filtered[0])
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
      {isEditing?
          (<EditCustomer
            editForm={editForm}
            handleChange={handleChange}
            handleCustomerUpdate={handleCustomerUpdate}
          />) : null}
		    
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
                <Customer
                  key={customer.id}
                  customer={customer}
                  captureEdit={captureEdit}
                  changeEditState={changeEditState}
                />) }
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

