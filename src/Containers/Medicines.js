import React, { useState } from 'react';
import List from '../Components/Common/List/List';
import InputBox from '../Components/Common/InputBox/InputBox'

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
    }
]

function Medicines(props) { 
    const [filterData, setFilterData] = useState()
    const [sortData, setSortData] = useState()
    const [sort, setSort] = useState()

    const handleSearch = (s) => {
        if (s !== "") {
            let fData = orgData.filter((d) => (
                d.name.toString().toLowerCase().includes(s.toLowerCase()) ||
                d.quantity.toString().includes(s) ||
                d.price.toString().includes(s) ||
                d.expiry.toString().includes(s)
            ))
    
            setFilterData(fData)
        } else {
            setFilterData()
            handleSort(sort, true)
        }
        
    }

    const handleSort = (s, empty=false) => {
        setSort(s)
        let data = !empty && filterData ? filterData : orgData;

        if (s !== "0") {
            let sData = data.sort((a, b) => {
                if (s === "lh") {
                    return a.price - b.price
                } else if (s === "hl") {
                    return b.price - a.price
                } else if (s === "e") {
                    return a.expiry - b.expiry
                } else if (s === "q") {
                    return a.quantity - b.quantity
                }
            })
            setSortData([...sData])
        }

    }

    let finalData = filterData ? filterData : sortData ? sortData : orgData

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
                        <div className='col-6'>
                            <InputBox
                                placeholder="Search medicines..."
                                onChange={(e) => handleSearch(e.target.value)} 
                            />
                        </div>
                        <div className='col-6'>
                            <InputBox
                                type="select"
                                onChange={(e) => handleSort(e.target.value)} 
                            >
                                <option value="0">--Select--</option>
                                <option value="lh">Price: Low to High</option>
                                <option value="hl">Price: High to Low</option>
                                <option value="q">Quantity</option>
                                <option value="e">Expiry</option>
                            </InputBox>
                        </div>
                    </div>

                    <div className='row'>
                        {
                            finalData !== undefined ?
                            finalData.map((d, index) => {
                                return(
                                    <List key={d.id.toString()} data={d} />
                                )
                            })
                            : null
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Medicines;