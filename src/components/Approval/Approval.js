import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "../../scss-config/material-ui.scss";
import "./Approval.css";
import {Link } from "react-router-dom";
import avatar from "../avatar.png";

import db from "../../firebase";
import { collection, onSnapshot } from '@firebase/firestore';

const Approval = () => {

    const [users, setUsers] = useState([{firstName: "Loading...", id: "initial"}]);

    /* useEffect(() => {
        const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
            console.log(snapshot.docs.map(doc => doc.data()))
        });
        return unsub
    }, []); */

    useEffect(() => 
            onSnapshot(collection(db, "users"), (snapshot) =>
            setUsers(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        ), []);
    console.log(users)
    return (
      <div>
        <Navbar />
        <div className="approval-container">
            <div className="approval-box">
                <div className="approval-page">
                    <h3>Approval</h3>

                    <ul>
                        {users.map(user => (
                                            <li key={user.id}>                            
                                            <div className="approval-itens">
                                                <p className="approval-avatar">                                  
                                                    <img src={avatar} alt="Avatar" className="avatar"/>
                                                    <h3>
                                                        {/* {user.email}<br /> */}
                                                        {user.firstName} {user.lastName}<br />
                                                    </h3>
                                                </p>
                                                <div className="approval-options">
                                                    <p>
                                                        <Link to="/approval"><button className="button">DETAILS</button></Link>
                                                    </p>    
                                                    <p>
                                                        <button className="button">APPROVE</button>
                                                    </p>
                                                </div>   
                                            </div>
                                        </li>
                                            ))}
                        
                    </ul>
                    
                    <div className="approval-btn">
                    <Link to="/"><button className="button">DASHBOARD</button></Link>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )}  

export default Approval;