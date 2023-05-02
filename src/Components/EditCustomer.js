//import React from 'react'
import React, {useEffect, useState} from 'react';
import { Navigate, useParams, useNavigate   } from "react-router-dom";

function EditCustomer() {
    const navigate = useNavigate();
    const params = useParams();
    //console.log(params.id);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/customers/"+params.id)
        .then(async res => {
                const obj = await res.json(); 
                if(obj.status === 'success'){
                    setName(obj.data[0].name);
                    setEmail(obj.data[0].email);
                    setPhone(obj.data[0].phone);
                }
        }).catch(() => {
            console.log('error');
        });
    },[])
    


// PATCH request; calls handleCustomerUpdate to push changes to the page
   function handleEditForm(e) {
    
        //const [id, setId] = useState([prop.id]);
        //return <Navigate to="/dashboard" />
        e.preventDefault();
        fetch(`http://localhost:3001/customers/${params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ name: name, email: email, phone: phone })
        })
        .then(resp => {
            return resp.json();
            //const obj = resp.json();
            //return obj; 
            /*console.log(obj);
            console.log(obj.status);
            //navigate('/customers', { replace: true });
            if(obj.status === 'success'){
                console.log("Customer updated successfully");
                sessionStorage.setItem("succ-msg", "Customer updated successfully");
                //return <Navigate to={"/customers"{ replace: true } } />;
                //return Navigate(`/customers/{ replace: true }`)
                navigate('/about', { replace: true });
                //sessionStorage.getItem("lastname");
                //console.log('ccc');
            }else{
                sessionStorage.setItem("error-msg", "Something went wrong to update customers");
            }*/
        }).then(obj => {
            console.log(obj);
            console.log(obj.status);
            if(obj.status === 'success'){
                console.log("Customer updated successfully");
                sessionStorage.setItem("succ-msg", "Customer updated successfully");
                navigate('/customers');
                //navigate('/customers', { replace: true });
            }else{
                console.log("Something went wrong to update customers");
                sessionStorage.setItem("error-msg", "Something went wrong to update customers");
                navigate('/customers', { replace: true });
            }
        })
        //return <Navigate to="/dashboard" />;
        //return <Navigate to="/customerss" />;
    } 


    return (
        <div>
            <h4>Edit Customer</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}
export default EditCustomer