import { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar"

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const [msg, setMsg] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cpasswordError, setCpasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

	let error = ''; 
	if(name === ''){
		error += 'name is mondatory';
		 setNameError(error);
		//alert('name is mondatory');
		return false;
	}else if(email === ''){
		error += 'email is mondatory';
		 setEmailError(error);
		//alert('email is mondatory');
		return false;
	}else if(phone === ''){
		error += 'phone is mondatory';
		 setPhoneError(error);
		//alert('phone is mondatory');
		return false;
	}else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
		error += 'You have entered an invalid email address!';
		 setEmailError(error);
		//alert("You have entered an invalid email address!");
		return false;
	}else if(password === ''){
		error += 'password is mondatory';
		 setPasswordError(error);
		//alert('phone is mondatory');
		return false;
	}else if(cpassword === ''){
		error += 'confirmed password is mondatory';
		 setCpasswordError(error);
		//alert('phone is mondatory');
		return false;
	}else if(cpassword !== password){
		error += 'password did not matched';
		 setCpasswordError(error);
		//alert('phone is mondatory');
		return false;
	}

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
			setMsg('Account created successfully');
			console.log('success');
        })
		.catch(error => {
            //this.setState({ errorMessage: error.toString() });
            //setMsg({ errorMessage: error.toString() });
            //console.error('There was an error!', error);
			setMsg('something went wrong');
			console.log('error');
        });
        
  }

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
					<h1>Sign Up : {msg}</h1>
					<form onSubmit={handleSubmit}>
					<label>Enter your name:
						<input 
						name="name" 
						type="text" 
						value={name}
						onChange={(e) => setName(e.target.value)}
						/><span className="mondatory">{nameError}</span>
					</label>
					<br /><br />
					<label>Enter your Email:
						<input 
						name="email" 
						type="text" 
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						/><span className="mondatory">{emailError}</span>
					</label>
					<br /><br />
					<label>Enter your Phone:
						<input 
						name="phone" 
						type="text" 
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						/><span className="mondatory">{phoneError}</span>
					</label>
					<br /><br />
					<label>Enter your Password:
						<input 
						name="password" 
						type="password" 
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						/><span className="mondatory">{passwordError}</span>
					</label>
					<br /><br />
					<label>Enter your Password:
						<input 
						name="cpassword" 
						type="password" 
						value={cpassword}
						onChange={(e) => setCpassword(e.target.value)}
						/><span className="mondatory">{cpasswordError}</span>
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