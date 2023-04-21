import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar"

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  //const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(`The name you entered was: ${name}`)

	// POST request using fetch inside useEffect React hook
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		//headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		//body: JSON.stringify({ title: 'React Hooks POST Request Example' })
		//body: JSON.stringify({ name: 'ddd', email: 'ddd@gmail.com', phone: '777777777' })
		body: JSON.stringify({ name: name, email: email, phone: phone })
	};
	fetch('http://localhost:3001/customers/', requestOptions)
		.then(async response => {
            const data = await response.json();
            if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            //this.setMsg({ msg: data.message })
			console.log('success');
        })
		.catch(error => {
            //this.setState({ errorMessage: error.toString() });
            //setMsg({ errorMessage: error.toString() });
            //console.error('There was an error!', error);
			console.log('error');
        });
        
  }

  /* useEffect(() => {
	// POST request using fetch inside useEffect React hook
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		//headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		//body: JSON.stringify({ title: 'React Hooks POST Request Example' })
		body: JSON.stringify({ name: 'ccc', email: 'ccc@gmail.com', phone: '777777777' })
	};
	fetch('http://localhost:3001/customers/', requestOptions)
		.then(response => response.json())
		.then(data => data.id);

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []); */

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
					<h1>Sign Up</h1>
					<form onSubmit={handleSubmit}>
					<label>Enter your name:
						<input 
						name="name" 
						type="text" 
						value={name}
						onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<br /><br />
					<label>Enter your Email:
						<input 
						name="email" 
						type="text" 
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<br /><br />
					<label>Enter your Phone:
						<input 
						name="phone" 
						type="text" 
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						/>
					</label>
					<br /><br />
					<label>Enter your Password:
						<input 
						name="password" 
						type="password" 
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<br /><br />
					<input type="submit" />
					</form>
				</article>
			</section>

			<footer>
				<p>Footer</p>
			</footer>
		</div>
    
  )
}

export default Register;