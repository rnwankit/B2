import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function LAppointment(props) {
    const [data, setData] = useState([]);

    const history = useHistory();

    const loadData = () => {
        let localData = JSON.parse(localStorage.getItem("appointment"));

        setData(localData);
    }

    const handleEdit = (id) => {
        history.push("/appointment", {"id": id})
    }

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("appointment"));

        let fData = localData.filter((l) => l.id !== id);

        localStorage.setItem("appointment", JSON.stringify(fData));

        loadData();
    }

    useEffect(
        () => {
            loadData()
        },
        []);
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

                <div className='row'>
                    {
                        data.map((d, i) => {
                            return (
                                <div className='col-3'>
                                    <h4>{d.name}</h4>
                                    <button onClick={() => handleEdit(d.id)}>Edit</button>
                                    <button onClick={() => handleDelete(d.id)}>Delete</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
}

export default LAppointment;