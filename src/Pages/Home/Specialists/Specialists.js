import React from 'react';
import './Specialists.css';
import { Card } from 'react-bootstrap';

import doctor1 from '../../../images/specialist/doctor1.jpg'
import doctor2 from '../../../images/specialist/doctor2.jpg'
import doctor3 from '../../../images/specialist/doctor3.jpg'
import doctor4 from '../../../images/specialist/doctor4.jpg'
import doctor5 from '../../../images/specialist/doctor5.jpg'
import doctor6 from '../../../images/specialist/doctor6.jpg'
import doctor7 from '../../../images/specialist/doctor7.jpg'
import doctor8 from '../../../images/specialist/doctor8.jpg'
import doctor9 from '../../../images/specialist/doctor9.jpg'
import Specialist from '../Specialist/Specialist';

const specialists = [
    {
        img: doctor1,
        name: 'Ema Wtason',
        expertize: 'Heart Surgeon',
        visit: '5pm-8pm',
        offday: 'Friday'
    },
    {
        img: doctor2,
        name: 'Hanery Anderson',
        expertize: 'Eye Surgeon',
        visit: '4pm-6pm',
        offday: 'Friday'
    },
    {
        img: doctor3,
        name: 'Andrew Smith',
        expertize: 'Heart Surgeon',
        visit: '5pm-10pm',
        offday: 'Sunday'
    },
    {
        img: doctor4,
        name: 'Horish Roy',
        expertize: 'Gaynologist',
        visit: '12pm-2pm',
        offday: 'Friday'
    },
    {
        img: doctor5,
        name: 'Eva Ze Buck',
        expertize: 'Lasik Specialist',
        visit: '6pm-8pm',
        offday: 'Sunday'
    },
    {
        img: doctor6,
        name: 'Denish Choula',
        expertize: 'Surgery Specialist ',
        visit: '6pm-10pm',
        offday: 'Friday'
    },
    {
        img: doctor7,
        name: 'Anderson Kamins',
        expertize: 'Gynecologists',
        visit: '4pm-8pm',
        offday: 'Friday',
    },
    {
        img: doctor8,
        name: 'Taylor Watson',
        expertize: 'Pathologist',
        visit: '5pm-9pm',
        offday: 'Sunday'
    },
    {
        img: doctor9,
        name: 'Ema Watson',
        expertize: 'Pathologist',
        visit: '5pm-9pm',
        offday: 'Sunday'
    }

]


const Specialists = () => {
    return (
        <div id="specialists" className="container">
            <h2 className="text-primary mt-5">Our Specialists</h2>
            <div className="row">

                {
                    specialists.map(specialist => <Specialist
                        key={specialist.name}
                        specialist={specialist}
                    ></Specialist>)
                }

            </div>

        </div>
    );
};

export default Specialists;