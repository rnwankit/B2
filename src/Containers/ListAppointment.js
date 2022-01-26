import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Card, CardTitle, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';

function ListAppointment(props) {
    const [data, setData] = useState();

    const history = useHistory();

    useEffect(
        () => {
            loadData();
        },
        [])

    const loadData = () => {
        let localData = JSON.parse(localStorage.getItem("appointment"));

        setData(localData);
    }

    const handleEdit = (id) => {
        history.push("/book_appointment", {"id": id})
    }

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("appointment"));

        let fData = localData.filter((l) => l.id !== id);

        localStorage.setItem("appointment", JSON.stringify(fData));

        loadData();
    }

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
                    <div exact className='col-6'>
                        <NavLink activeClassName='aptNav' to="/list_appointment">
                            List Appointment
                        </NavLink>
                    </div>
                </div>
                {
                    data ? data.map((d) => {
                        return (
                            <div className='col-3 pt-4'>
                                <Card
                                >
                                    <CardBody>
                                        {d.name}
                                    </CardBody>
                                    <Button onClick={() => handleEdit(d.id)}>Edit</Button>
                                    <Button onClick={() => handleDelete(d.id)}>Delete</Button>
                                </Card>
                            </div>
                        )
                    }) : null
                }

            </div>
        </section>
    );
}

export default ListAppointment; <h1>List Appointment</h1>