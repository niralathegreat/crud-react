import React from 'react'
import { Link, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar"
import Header from "./Header"
import Footer from "./Footer"

export default function Home() {

	if(localStorage.getItem('username') === null){

		return (
			<div>
			    <Header />
				<section>
					<nav>
						<strong>Sidebar</strong>
						<ul>
							<Sidebar />
						</ul>
					</nav>
		
					<article>
						<h1>Welcome to Home Page</h1>
					</article>
				</section>
				<Footer />
			</div>
		)
		
	}else{
		return <Navigate to="/dashboard" />
	}
	
    
}
