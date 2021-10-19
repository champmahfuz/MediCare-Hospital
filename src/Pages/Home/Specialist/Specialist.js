import React from 'react';
import './Specialist.css';

const Specialist = ({ specialist }) => {
    const { name, img, expertize, visit, offday } = specialist;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-primary">{expertize}</h5>
            <p>Visiting Hour: {visit}</p>
            <p>Off Day: {offday}</p>
        </div>
    );
};

export default Specialist;