import React, { useEffect, useState } from 'react';
import Button from '../Components/Common/Button/Button';
import InputBox from '../Components/Common/InputBox/InputBox';
import * as Yup from "yup"
import { Form, FormikProvider, useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function BookAppointment(props) {
    const [editData, setEditData] = useState();

    useEffect(
        () => {
            if (props.location.state !== undefined) {
                let localData = JSON.parse(localStorage.getItem("appointment"));
                
                let uData = localData.filter((l) => l.id === props.location.state.id)

                setEditData(uData[0]);
                console.log(uData[0])
            }
            history.replace()
            //console.log(props.location.state)
        },
    [])

    console.log(editData)
    const history = useHistory();

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

    const handleInsert = (values) => {
        let localData = JSON.parse(localStorage.getItem("appointment"));

        let data = {"id": Math.floor((Math.random() * 100) + 1), ...values }

        if (localData === null) {
            localStorage.setItem("appointment", JSON.stringify([data]));
        } else {
            localData.push(data)
            localStorage.setItem("appointment", JSON.stringify(localData));
        }

        history.push("/list_appointment")
        
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

        history.push("/list_appointment");
    }

    console.log(editData ? editData.department : null)

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>
                <div className='row text-center apt'>
                    <div className='col-6'>
                        <NavLink activeClassName='aptNav' to="/book_appointment">
                            Book Appointment
                        </NavLink>
                    </div>
                    <div className='col-6'>
                        <NavLink  activeClassName='aptNav'to="/list_appointment">
                            List Appointment
                        </NavLink>
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
                                    onChange={e => setFieldValue("department", e.target.value)}
                                    onBlur={handleBlur}
                                    errors={Boolean(touched.department && errors.department)}
                                    errorMessage={touched.department && errors.department}
                                >
                                    <option value="general" label='general' />
                                    <option value="dental" label='dental' />
                                    
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
                            <Button type="submit">Make an Appointment</Button>
                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </section>

    );
}

export default BookAppointment;