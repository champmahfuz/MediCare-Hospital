import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css';


const Booking = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([])
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])



    useEffect(() => {
        const info = services.find(product => product?.price == serviceId);
        setDetails(info)
    }, [services])
    return (
        <div className='container'>

            <div className="details pb-3" >
                <img src={details?.img} alt="" />
                <h3>{details?.name}</h3>
                <h5>Price:{serviceId} tk</h5>
                <p>{details?.description}</p>
                <Link to="/services"><button className="btn btn-success">View All</button> </Link>
            </div>
            <br /><br />
        </div>


    );
};

export default Booking;
