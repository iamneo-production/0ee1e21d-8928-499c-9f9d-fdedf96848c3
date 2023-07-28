import React, {useState} from "react";
import axios from 'axios';
import SignupAuth from "../Auth/SignupAuth";
import { Modal, Button } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Signup.css'

function Signup(){

    const [values, setValues] = useState({
        Email: '',
        username:'',
        Password: '',
        mobileNumber:'',
        userRole:'',
        confirmPassword:''
    })
    const navigate = useNavigate()
    const [role, setRole] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setError] = useState('')

    const handleInput = (event)=> {
        if(event.target.name === 'userRole'){
            setRole(event.target.value);
        }
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    }    
 
    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = await SignupAuth(values);
    
        if (validationErrors.Email === "" && validationErrors.Password === "" && validationErrors.Username === ""  && validationErrors.Mobile === "" && validationErrors.Role === "") {
            let postPromise;
            console.log(values);
    
            if (values.userRole === "User"){
                postPromise = axios.post('https://8080-cdfbadaabbeabbcfdaafcbdaebccfbaabccd.project.examly.io/user/signup',values);
            }
            if (values.userRole === 'Admin') {
                postPromise = axios.post('https://8080-cdfbadaabbeabbcfdaafcbdaebccfbaabccd.project.examly.io/admin/signup',values);
            }
    
            postPromise.then(res => {
                setShowModal(true);
            })
            .catch(err => {
                console.log(err)
                if (err.response && (err.response.data === 'Username is already in use' || err.response.data === 'Email is already in use')) {
                    setErrorMessage('User is already in use');
                    setShowModal(true);
                }
            });
        } else {
            setError(validationErrors);
        }
    }
    
    return (
        <>
            <div className="text-center py-3 w-100" style={{backgroundColor: '#3F735E'}}>
                <h1 className="font-weight-bold text-white">Business Loan Management</h1>
            </div>
            <br></br>
            <br></br>
            <div className="container mt-1">
                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                        <div className="card shadow mb-4 bg-white">
                            <div className="card-header text-center py-3" style={{backgroundColor: '#3F5F73'}}>
                                <h2 className="font-weight-bold text-white">Register</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-4' style={{marginTop: '10px'}} >
                                        <select id="admin/user" name='userRole' onChange={handleInput} className='form-control rounded-0'>
                                            <option value=''>Select a Role</option>
                                            <option value='Admin'>Admin</option>
                                            <option value='User'>User</option>
                                        </select>
                                        {errors.Role && <span className='text-danger'>{errors.Role}</span>}
                                    </div>
                                    <div className='mb-4'>
                                        <input type="email" id="email" placeholder='Enter Email' name='Email'
                                        onChange={handleInput} className='form-control rounded-0' autoComplete='off'/>
                                        {errors.Email && <span className='text-danger'>{errors.Email}</span>}
                                    </div>
                                    <div className='mb-4'>
                                        <input type="text" id="username" placeholder='Enter Username' name='username'
                                        onChange={handleInput} className='form-control rounded-0' autoComplete='off' disabled={role === 'Admin'}/>
                                        {errors.Username && <span className='text-danger'>{errors.Username}</span>}
                                    </div>
                                    <div className='mb-4'>
                                        <input type="text" id="mobileNumber" placeholder='Enter Mobile Number' name='mobileNumber'
                                        onChange={handleInput} className='form-control rounded-0' autoComplete='off'/>
                                        {errors.Mobile && <span className='text-danger'>{errors.Mobile}</span>}
                                    </div>
                                    <div className='mb-4'>
                                        <input type="password" id="password" placeholder='Password' name='Password'
                                        onChange={handleInput} className='form-control rounded-0' />
                                        {errors.Password && <span className='text-danger'>{errors.Password}</span>}
                                    </div>
                                    <div className='mb-4'>
                                        <input type="password" id="confirmPassword" placeholder='Confirm Password' name='confirmPassword'
                                        onChange={handleInput} className='form-control rounded-0' />
                                        {errors.confirmPassword && <span className='text-danger'>{errors.confirmPassword}</span>}
                                    </div>
                                    <div className='row'>
                                        <div className='col-12' style={{marginBottom: '20px'}}>
                                            <button type='submit' id="registerButton" className='btn btn-success w-100 rounded-0'> Register</button>
                                        </div>
                                        <div className='col-4'>
                                            <div className=" text-center">
                                                <p>Already an user/admin?</p>
                                            </div>
                                        </div>
                                        <div className='col-8'>
                                            <Link to='/login' type="button" id='loginLink' className="btn btn-primary w-50 rounded-0" style={{marginleft: '20px'}}> Login </Link>
                                        </div>
                                        <Outlet/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={() => {setShowModal(false); setErrorMessage('')}}>
                <Modal.Header closeButton>
                    <Modal.Title>{errorMessage ? 'Registration Failed' : 'Success'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{errorMessage || 'Your registration was successful! Please log in.'}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        setShowModal(false);
                        if (!errorMessage) {
                            navigate("/login");
                        }
                        setErrorMessage('');  // Reset the error message
                    }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )    
}

export default Signup