import React, { useState } from 'react';
import Button, { ButtonType } from '../Components/Common/Button/Button';
import InputBox from '../Components/Common/InputBox/InputBox';
import * as yup from 'yup';
import { FormikProvider, Form, useFormik } from 'formik';

function Login(props) {
    const [userType, setUserType] = useState('Login');
    const [name, setName] = useState('');
    const [reset, setReset] = useState(false);

    const handleLogin = (values) => {
        let localUsersData = JSON.parse(localStorage.getItem("users"));
    
        if (localUsersData === null) {
            alert("No data found");
        } else {
            let filterData = localUsersData.filter((l) => (l.email === values.email && l.password === values.password))
            if (filterData.length > 0) {
                alert("Login successfully");
            } else {
                alert("Invalid email/password");
            }
        }
    }

    const handleSignup = (values) => {
        console.log("handleSignup")
        let localUsersData = JSON.parse(localStorage.getItem("users"));

        if (localUsersData === null) {
            localStorage.setItem("users", JSON.stringify([values]))
        } else {
            localUsersData.push(values)
            localStorage.setItem("users", JSON.stringify(localUsersData))
        }
        //console.log(localUsersData);

        //localStorage.setItem("users", JSON.stringify(values))
        
    }

    const handleForgotPassword = (values) => {
        console.log(values)
    }

    const handleSigninGoogle = () => {

    }

    let loginSchema = {
        email: yup.string()
            .email("Invalid email")
            .required("Email must be required"),
        password: yup.string()
            .required("Password must be required")
            .min(8, "Password must be 8 character long.")
    }

    let signupSchema = {
        name: yup.string()
            .required("Name must be required."),
        email: yup.string()
            .email("Invalid email")
            .required("Email must be required"),
        password: yup.string()
            .required("Password must be required")
            .min(8, "Password must be 8 character long.")
    }

    let schema, initialValues;

    if (userType === 'Login') {
        initialValues = {
            email: '',
            password: ''
        }
        schema = yup.object().shape(loginSchema)
    } else {
        initialValues = {
            name: '',
            email: '',
            password: ''
        }
        schema = yup.object().shape(signupSchema)
        
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: values => {
            console.log(!reset && userType === 'Signup')
            
            if (!reset && userType === 'Login') {
                handleLogin(values);
            } else if (!reset && userType === 'Signup') {
                handleSignup(values);
            } else {
                handleForgotPassword(values);
            }
        },
    });

    const { handleSubmit, errors, getFieldProps } = formik;

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
                    <FormikProvider
                        value={formik}
                    >
                        <Form noValidate onSubmit={handleSubmit}>
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
                                                        placeholder="Your Name"
                                                        {...getFieldProps("name")}
                                                        errors={Boolean(errors.name)}
                                                        errorMessage={errors.name}
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
                                            {...getFieldProps("email")}
                                            errors={Boolean(errors.email)}
                                            errorMessage={errors.email}
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
                                                    {...getFieldProps("password")}
                                                    errors={Boolean(errors.password)}
                                                    errorMessage={errors.password}
                                                />
                                            </div>
                                        </div>
                                }
                                <div className="text-center">
                                    {
                                        !reset ?
                                            userType === 'Login' ?
                                                <div>
                                                    <Button type="submit">Login</Button>
                                                </div>
                                                :
                                                <div>
                                                    <Button type="submit">Signup</Button>
                                                </div>
                                            :
                                            <div>
                                                <Button type="submit">Submit</Button>
                                            </div>
                                    }

                                    <p>or</p>
                                    <Button border onClick={() => handleSigninGoogle()}>Sign in with Google</Button>

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
                        </Form>
                    </FormikProvider>
                </div>
            </section>
        </div>
    );
}

export default Login;