import React, { useEffect, useState } from 'react';
import Button from '../Components/Common/Button/Button';
import InputBox from '../Components/InputBox/InputBox';
import * as Yup from "yup"
import { Form, FormikProvider, useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Appointment(props) {
    const [editData, setEditData] = useState(false)
    const history = useHistory()

    useEffect(
        () => {
            if (props.location.state) {
                let localData = JSON.parse(localStorage.getItem("appointment"));

                let uData = localData.filter((l) => l.id === props.location.state.id);

                setEditData(uData[0]);
                history.replace()
            }


        },
        [])

    const handleInsert = (values) => {
        let localData = JSON.parse(localStorage.getItem("appointment"));

        let data = { "id": Math.floor((Math.random() * 100) + 1), ...values }

        if (localData === null) {
            localStorage.setItem("appointment", JSON.stringify([data]));
        } else {
            localData.push(data)
            localStorage.setItem("appointment", JSON.stringify(localData));
        }

        history.push("/lappointment");
    }

    const handleUpdate = (values) => {
        let localData = JSON.parse(localStorage.getItem("appointment"));

        let uData = {
            id: parseInt(editData.id),
            ...values
        }

        let afterUpdate = localData.map((v) => {
            if (v.id === editData.id) {
                return uData
            } else {
                return v
            }
        })

        localStorage.setItem("appointment", JSON.stringify(afterUpdate))

        history.push("/lappointment");
    }

    let appointmentSchema = {
        name: Yup.string()
            .required("Name is required")
            .min(2, "Invalid name"),
        email: Yup.string()
            .required("Email is required")
            .email("Invalid email id formate"),
        phone: Yup.number()
            .required("Phone is required")
            .min(10, "Invalid Phone"),
        department: Yup.string()
            .required("Select department"),
        date: Yup.string()
            .required("Date is required"),
        message: Yup.string()
            .required("Message is required")
    }

    const validationSchema = Yup.object().shape(appointmentSchema);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: editData ? editData.name : '',
            email: editData ? editData.email : '',
            date: editData ? editData.date : '',
            department: editData ? editData.department : '',
            message: editData ? editData.message : '',
            phone: editData ? editData.phone : ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            if (editData) {
                handleUpdate(values)
            } else {
                handleInsert(values);
            }
        },
    });

    const { errors, touched, handleSubmit, getFieldProps, handleChange, handleBlur, resetForm, setFieldValue } = formik;

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                </div>
                <div className='row text-center'>
                    <div className='col-6'>
                        <NavLink activeClassName='aptNav' to={"/appointment"}>Book Appointment</NavLink>
                    </div>
                    <div className='col-6'>
                        <NavLink activeClassName='aptNav' to={"/lappointment"}>List Appointment</NavLink>
                    </div>
                </div>
                <FormikProvider value={formik}>
                    <Form onSubmit={handleSubmit} method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <InputBox
                                    type="text"
                                    name="name"
                                    defaultValue={editData ? editData.name : ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Your Name"
                                    errors={Boolean(touched.name && errors.name)}
                                    errorMessage={touched.name && errors.name}
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <InputBox
                                    type="text"
                                    name="email"
                                    defaultValue={editData ? editData.email : ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Your Email"
                                    errors={Boolean(touched.email && errors.email)}
                                    errorMessage={touched.email && errors.email}
                                />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <InputBox
                                    type="text"
                                    name="phone"
                                    defaultValue={editData ? editData.phone : ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Your Phone Number"
                                    errors={Boolean(touched.phone && errors.phone)}
                                    errorMessage={touched.phone && errors.phone}
                                />
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <InputBox
                                    type="date"
                                    name="date"
                                    defaultValue={editData ? editData.date : ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Your Name"
                                    errors={Boolean(touched.date && errors.date)}
                                    errorMessage={touched.date && errors.date}
                                />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <InputBox
                                    type="select"
                                    name="department"
                                    defaultValue={editData ? editData.department : ''}
                                    key={editData ? editData.department : ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errors={Boolean(touched.department && errors.department)}
                                    errorMessage={touched.department && errors.department}
                                >
                                    <option value="" label='select' />
                                    <option value="general" label='general' />
                                    <option value="dental" label='dental' />
                                    <option value="skin" label='skin' />
                                </InputBox>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <InputBox
                                type="textarea"
                                name="message"
                                placeholder="Message"
                                defaultValue={editData ? editData.message : ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errors={Boolean(touched.message && errors.message)}
                                errorMessage={touched.message && errors.message}
                            />
                        </div>
                        <div className="text-center">
                            <Button type="submit">{editData ? "Update an Appointment" : "Make an Appointment"}</Button>
                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </section>

    );
}

export default Appointment;