import React from 'react'
import { Link, Navigate } from "react-router-dom";
import Sidebar from './Sidebar';

function NotFound() {
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
                        <p><Link to="/">Back</Link></p>
			            <h1>Page not found for this url </h1>
					</article>
				</section>

				<footer>
					<p>Footer</p>
				</footer>
			</div>
    )
}
export default NotFound