import { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import Dashboard from "./Dashboard";
import { Link, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
        username,
        password,
      };
      localStorage.setItem('token-info', JSON.stringify(userData));
      localStorage.setItem('username', username);
      //setIsLoggedIn(true);
      setUsername('');
      setPassword('');
	}
	
	  //const username = localStorage.getItem('username');
	  //if(isLoggedIn){
	  if(localStorage.getItem('username') !== null){
		//console.log('logged in');
		return <Navigate to="/dashboard" />
		
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
					<Link to="/">Back</Link>
						<h1>Login</h1>
						<form onSubmit={handleSubmit}>
						<label>Username:
							<input 
							name="username" 
							type="text" 
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							/>
						</label>
						<br /><br />
						<label>Password:
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

  
}

export default Login;