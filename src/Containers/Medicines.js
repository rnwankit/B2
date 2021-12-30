import React, { useState } from 'react';
import InputBox from '../Components/Common/InputBox/InputBox';
import List from '../Components/Common/List/List';

function Medicines(props) {
    const orgData = [
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

    const [filterData, setFilterData] = useState(); 

    const handleSearch = (s) => {
        console.log(s)
        let searchData = orgData.filter((o) => (
            o.name.toString().toLowerCase().includes(s.toLowerCase())
        ))

        setFilterData(searchData);
    }

    let finalData = filterData ? filterData : orgData

    return (
        <div>
            <section id="about" className="about">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="text-center col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center px-lg-5 abouttop">
                            <h2>Medicines</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-5'>
                            <InputBox 
                                placeholder="Search medicines..." 
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </div>
                        <div className='col-5'>

                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        {
                            finalData.map((d) => {
                                return (
                                    <List key={d.id.toString()} data={d} />
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