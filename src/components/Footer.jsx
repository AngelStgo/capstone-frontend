function Footer() {
    return (
        <div className="footer">

            <div className="navList">
                 <h3>Location</h3>
            <ul>
                <p>This location</p>
                <p>New location</p>
            </ul>
            </div>
           
            <div className="navList">
                <h3>Hours</h3>
                <ol>
                   <p>Monday: 10am - 4pm</p>
                   <p>Tuesday: 10am - 4pm</p>
                   <p>Wednesday: 10am - 4pm</p>
                   <p>Thursday: 11am - 4pm</p>
                   <p>Friday: 11am - 5pm</p>
                   <p>Weekends: Closed</p>
                </ol>
            </div>

            <div className="navList">
                <h3>Contact</h3>
                <ol>
                    <p>thisemail@email.com</p>
                    <p>thatemail@email.com</p>
                </ol>
            </div>

            <div className="navList">
                <ol>
                <p>&copy; 2025 Tattoo Studio. All rights reserved.</p>
                </ol>
            </div>

            


            <div className="footerLinks">
                <h3>Connect with Us</h3>
            <ol>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
            </ol>
            </div>
            
        </div>
    )
}

export default Footer;