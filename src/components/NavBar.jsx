
function NavBar() {
    return (
        <div className="navBar">
            <div className="navList">
                <a href="#">Location</a>
                <ol>
                     <p>Location here</p>
                    <p>Location there</p>
                </ol>
            </div>
            <div className="navList">
                <a href="#">Contact</a>
                <ol>
                    <p>thisemail@email.com</p>
                    <p>thatemail@email.com</p>
                </ol>
            </div>
            <div className="navList">
                <a href="#">Schedule</a>
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