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
    //end here
    return (
        <div>
            <h2 className="text-primary">Please Login</h2>
            <br /><br /><br />

            <form onSubmit={handleRegistration}>
                <div className="container">

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address :</label>
                        <input onBlur={handleEmailChangr} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password :</label>
                        <input onBlur={handlePasswordChangr} type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="row-mb-3 text-danger"></div>
                    <button type="submit" className="btn btn-primary">Sign In</button>

                </div>
            </form>

            <br />
            <br />
            <br />
            <br />
            <br />

            <button onClick={handleGoogleLogin} type="submit" className="btn btn-primary">Google Sign In</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;