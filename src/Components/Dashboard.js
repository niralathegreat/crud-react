import React from "react";
import { Button } from "react-bootstrap"
import { Link, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar"


function Dashboard(){
	
	if(localStorage.getItem('username') === null){
		return <Navigate to="/login" />
	}else{
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
						<h1>Welcome to dashboard, { localStorage.getItem('username') }</h1>
					</article>
				</section>

				<footer>
					<p>Footer</p>
				</footer>
			</div>
			
		)
	}
	
}

export default Dashboard;