import React from 'react'
import { Link, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar"
import Customers from "./Customers"
import "../Layout.css";

function Layout() {
    return (
        <div>
			<header>
			<h2>CRUD Operations</h2>
			</header>

			<section>
			<nav>
				<ul>
					<Sidebar />
				</ul>
			</nav>
			
			<article>
				<Customers />
			</article>
			</section>

			<footer>
			<p>Footer</p>
			</footer>
		</div>
    )
}
export default Layout