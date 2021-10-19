import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    // login
    const [email, setEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [error, setError] = useState('');
    const handleEmailChangr = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChangr = e => {
        SetPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        const auth = getAuth();
        if (password.length < 6) {
            setError('Password Must Be At List 6 Characters Long')
            return
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }
    //end
    return (
        <div>
            <h2>Please Login</h2>
            <br />
            <form onSubmit={handleRegistration}>
                <label htmlFor="email">Email :</label>
                <input onBlur={handleEmailChangr} type="email" placeholder="Enter your email" required />
                <br />
                <br />
                <label htmlFor="email">Password :</label>
                <input onBlur={handlePasswordChangr} type="password" placeholder="password" required />
                <div className="mb-3 text-danger">{error}</div>
                <br />


                <br />
                <div className="row-mb-3 text-danger"></div>
                <br />
                <button className="btn btn-warning">Sign In</button>

            </form>
            <br />
            <br />
            <br />
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;