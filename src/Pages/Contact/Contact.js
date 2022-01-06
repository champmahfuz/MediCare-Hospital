// import React from 'react';

// const Contact = () => {
//     return (
//         <div>
//             <br /><br /><br />
//             <div className="container">
//                 <div className="mb-3">
//                     <label for="exampleFormControlInput1" className="form-label">Name :</label>
//                     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
//                 </div>
//                 <div className="mb-3">
//                     <label for="exampleFormControlInput1" className="form-label">Email address :</label>
//                     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
//                 </div>
//                 <div className="mb-3">
//                     <label for="exampleFormControlInput1" className="form-label">Address :</label>
//                     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
//                 </div>
//                 <div className="mb-3">
//                     <label for="exampleFormControlTextarea1" className="form-label">Your Feedback :</label>
//                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                 </div>
//             </div>
//             <br /><br /><br />
//         </div>


//     );
// };

// export default Contact;

import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <>
            <div className={`${styles.contactContainer}`}>
                <div className={`${styles.contactBox}`}>
                    <div className={`${styles.left1}`}></div>
                    <div className={`${styles.right1}`}>
                        <h2>Contact Us</h2>
                        <input type="text" className={`${styles.field}`} placeholder="Your Name " />
                        <input type="text" className={`${styles.field}`} placeholder="Your Email " />
                        <input type="text" className={`${styles.field}`} placeholder="Phone" />
                        <textarea placeholder="Message" className={`${styles.field}`}></textarea>
                        <button className={`${styles.btn1}`}>Send</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;