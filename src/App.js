import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
  
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import Customers from "./Components/Customers";
import Logout from "./Components/Logout";
import NotFound from "./Components/NotFound";
import Layout from "./Components/Layout";
  
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
		      <Route path="/logout" element={<Logout />} />
		      <Route path="/layout" element={<Layout />} />
          <Route path="*"  element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
  
export default App;

/*
import React, { useEffect, useState } from "react";
import Customers from "./Components/Customers";
import Login from "./Components/Login";
import Appcss from "./App.css";

function App() {
// set state
  const [customers, setCustomers] = useState([]);

// first data grab
  useEffect(() => {
    fetch("http://10.16.70.72/suryakant/api/customers.php")
      .then((resp) => resp.json())
      .then((data) => {
        setCustomers(data)
      });
  }, []);

// update customers on page after edit
  function onUpdateCustomer(updatedCustomer) {
    const updatedCustomers = customers.map(
      customer => {
        if (customer.id === updatedCustomer.id) {
          return updatedCustomer
        } else {return customer}
      }
    )
    setCustomers(updatedCustomers)
  }

  if(localStorage.getItem('token-info') === ''){
    return (
      <div>
        <Login />
      </div>
    );

  }else{
    return (
      <div>
        <Customers
          customers={customers}
          onUpdateCustomer={onUpdateCustomer}
        />
      </div>
    );

  }

  
}
export default App; */