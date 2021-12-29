import React from 'react';
import Lists from '../../Components/Common/List/List';

function Medicines(props) {
    const data = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021
        },
    ]
    return (
        <div>
            <section id="appointment" class="appointment">
                <div class="container">
                    <div class="section-title">
                        <h2>Medicines</h2>
                    </div>
                    <div class="row">
                        {
                            data.map((d) => {
                                return (
                                    <Lists key={d.id.toString()} data={d} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Medicines;