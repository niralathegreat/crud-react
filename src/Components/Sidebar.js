import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
	if(localStorage.getItem('username') !== null){
		return (
			<div>
				<li>
				  <Link to="/dashboard">Dashboard</Link>
				</li>
				<li>
				  <Link to="/customers">Customers</Link>
				</li>
				<li>
				  <Link to="/about">About</Link>
				</li>
				<li>
				  <Link to="/contact">Contact Us</Link>
				</li>
				<li>
				  <Link to="/logout">Logout</Link>
				</li>
			</div>
		)
	}else{
		return (
			<div>
				<li>
				  <Link to="/">Home</Link>
				</li>
				<li>
				  <Link to="/login">Login</Link>
				</li>
				<li>
				  <Link to="/register">Register</Link>
				</li>
			</div>
		)
	}
}

export default Sidebar


