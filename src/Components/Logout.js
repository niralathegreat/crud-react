import React, { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import Sidebar from './Sidebar';

function Logout() {

	localStorage.removeItem('token-info');
    localStorage.removeItem('username');
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
			            <Link to="/">Back to Login</Link>
			            <h1>Successfully Logout</h1>
					</article>
				</section>

				<footer>
					<p>Footer</p>
				</footer>
		</div>
    )
}
export default Logout