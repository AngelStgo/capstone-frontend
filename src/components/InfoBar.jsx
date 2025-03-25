
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navBar">
             <div className="navList">
                 <h3>Location</h3>
            <ul>
                <p>This ave. location st fl 3</p>
            </ul>
            </div>

            <div className="navList">
            <h3>Contact</h3>
                <ol>
                    <p>thisemail@email.com</p>
                    <p>thatemail@email.com</p>
                </ol>
            </div>

                <div className="navList">
                <Link to = "/appointment">Make an Appointment</Link>
                </div>

            <div className="navList">
                <h3>Schedule</h3>
                <ol>
                   <p>Monday: 10am - 4pm</p>
                   <p>Tuesday: 10am - 4pm</p>
                   <p>Wednesday: 10am - 4pm</p>
                   <p>Thursday: 11am - 4pm</p>
                   <p>Friday: 11am - 5pm</p>
                   <p>Weekends: Closed</p>
                </ol>
            </div>
            
        </div>
    )
};

export default NavBar;