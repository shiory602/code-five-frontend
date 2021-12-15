import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "../../scss-config/material-ui.scss";
import "./Approval.css";
import {Link } from "react-router-dom";
import avatar from "../avatar.png";

import db from "../../firebase";
import { collection, onSnapshot } from '@firebase/firestore';

import Modal from 'react-modal';
import { useExpenses } from '../../contexts/ExpensesContext';

Modal.setAppElement('#root');

const Approval = () => {

    const [users, setUsers] = useState([{firstName: "Loading...", id: "initial"}]);

    useEffect(() => 
            onSnapshot(collection(db, "users"), (snapshot) =>
            setUsers(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        ), []);
    console.log(users)

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { listExpenses } = useExpenses();
    


    function approveHandler() {
        var btn = document.getElementById("btn");
        var bgColor = "#7400B8";
        console.log(btn);
        
    }
    
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
                                                            <Link to="/approval"><button className="button" onClick={() => {setModalIsOpen(true);}}>DETAILS</button></Link>
                                                        </p>    
                                                        <p>
                                                            <button id="btn" className="button" onClick={approveHandler}>APPROVE</button>
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

            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="modal-content">
                    <h2>Expenses History</h2>
                    <ul>
                        {listExpenses.length > 0 ? listExpenses.map((expense, index) => {
                            return (
                                <li key={index}>
                                    <span className='name'>{expense.description}</span>
                                    <span className='value'>$ {expense.amount}</span>
                                </li>
                            )
                        }) : ''}
                    </ul>
                </div>  
                <div className="modal-close">
                    <button className="button" onClick={() => setModalIsOpen(false)}>CLOSE</button>
                </div>  
            </Modal>
        </div>
    )}  

export default Approval;