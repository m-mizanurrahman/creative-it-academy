import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5055/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/AddReview" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Add A Review</span>
                    </Link>
                </li>
                <li>
                        <Link to="/Order" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Order List</span>
                        </Link>
                    </li>


                {isAdmin && <div>
                    <li>
                        <Link to="/manage" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Manage Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add An Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addEvent" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Add A Service</span>
                        </Link>
                    </li>
                    


                </div>}
            </ul>

        </div>
    );
};

export default Sidebar;