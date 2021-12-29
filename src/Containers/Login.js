import React, { useState } from 'react';
import Button, { ButtonType } from '../Components/Common/Button/Button';
import InputBox from '../Components/Common/InputBox/InputBox';


function Login(props) {
    const [userType, setUserType] = useState('Login');
    const [name, setName] = useState('');
    const [reset, setReset] = useState(false);

    const handleLogin = () => {

    }

    const handleSignup = () => {
        console.log(name);
    }

    const handleForgotPassword = () => {

    }

    const handleSigninGoogle = () => {

    }

    return (
        <div>
            <section id="about" className="about">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="text-center col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center px-lg-5 abouttop">
                            {
                                reset === true ? <h2>Forgot Password</h2> :
                                    userType === 'Login' ? <h2>Login</h2> : <h2>Signup</h2>
                            }
                        </div>
                    </div>
                    <div className="php-email-form">
                        {
                            reset === false ?
                                userType === 'Login' ?
                                    null
                                    :
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-6 form-group">
                                            <InputBox
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                : null
                        }

                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6 form-group mt-3 mb-10">
                                <InputBox
                                    type="email"
                                    className="form-control"
                                    name="email" id="email"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                        </div>
                        {
                            reset === true ? null :
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-6 form-group mt-3 mb-10">
                                        <InputBox
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            placeholder="Your Password"
                                            required
                                        />
                                    </div>
                                </div>
                        }
                        <div className="text-center">
                            {
                                !reset ?
                                    userType === 'Login' ?
                                        <div>
                                            <Button onClick={() => handleLogin()}>Login</Button>
                                        </div>
                                        :
                                        <div>
                                            <Button onClick={() => handleSignup()}>Signup</Button>
                                        </div>
                                    :
                                    <div>
                                        <Button onClick={() => handleForgotPassword()}>Submit</Button>
                                    </div>
                            }

                            <p>or</p>
                            <Button color="#fff" border  onClick={() => handleSigninGoogle()}>Sign in with Google</Button>

                            {
                                userType === 'Login' ?
                                    <div>
                                        <label>Create new account: </label>
                                        <Button buttonType={ButtonType.LINK} onClick={() => { setReset(false); setUserType('Signup') }}>Signup</Button>
                                    </div>
                                    :
                                    <div>
                                        <label>Already have an account? </label>
                                        <Button buttonType={ButtonType.LINK} onClick={() => { setReset(false); setUserType('Login') }}>Login</Button>
                                    </div>
                            }
                            {
                                !reset ? <Button buttonType={ButtonType.LINK} onClick={() => setReset(true)}>Forgot Password?</Button> : null
                            }
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;