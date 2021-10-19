import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 upper case');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }
    return (
        <div>
            <br /><br /><br /><br /><br /><br />
            <h2 className="text-primary">Please Register</h2>
            <form onSubmit={handleRegistration} >
                <label htmlFor="email">Email :</label>
                <input onBlur={handleEmailChange} type="email" placeholder="Enter your email" required />
                <br />
                <br />
                <label htmlFor="email">Password :</label>
                <input onBlur={handlePasswordChange} type="password" placeholder="password" required />
                <br />


                <br />
                <div className="row-mb-3 text-danger">{error}</div>
                <br />
                <input type="submit" value="Register" />
            </form>
            <Link to="/login">Already Register?</Link>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default Register;