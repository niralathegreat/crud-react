import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from './Sidebar'; 

function Contact() {

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
                    <Link to="/">Back</Link>
                    <h1>Welcome to Contact</h1>
                </article>
            </section>

            <footer>
                <p>Footer</p>
            </footer>
		</div>
    )
}
export default Contact