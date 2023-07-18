import React, { useState } from 'react';
import axios from 'axios';
import SignupAuth from './SignupAuth';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Signup() {
  const [values, setValues] = useState({
    email: '',
    pwd: '',
    username: '',
    mobileNumber: '',
    userRole: '',
    confirmPwd: ''
  });

  const navigate = useNavigate();
  const [errors, setError] = useState('');

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = SignupAuth(values);
    setError(validationErrors);

    if (
      validationErrors.email === '' &&
      validationErrors.pwd === '' &&
      validationErrors.username === '' &&
      validationErrors.mobileNumber === '' &&
      validationErrors.userRole === '' &&
      validationErrors.confirmPwd === ''
    ) {
      try {
        // eslint-disable-next-line
         await axios.post('https://8080-ddebbccceeecadceaedccbedbccfbaabccd.project.examly.io/user/signup', values).then(res=>{if(res.data){
            navigate('/user/login');
          }});
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center p-4 w-100 signupHead'>
        <strong>Register</strong>
      </div>
      <br />
      <div className='d-flex justify-content-center align-items-center vh-90 SignupPage'>
        <div className='p-1 rounded w-25 signupForm'>
          <form onSubmit={handleSubmit}>
          <div className='mb-3'>
                            <input type="text" id="admin/user" placeholder='Enter admin/user' name='userRole'
                            onChange={handleInput} className='form-control rounded-0' autoComplete='off'/>
                            {errors.userRole && <span className='text-danger'>{errors.userRole}</span>}
                        </div>
            <div className='mb-3'>
              <input
                type='email'
                id='email'
                placeholder='Enter Email'
                name='email'
                onChange={handleInput}
                className='form-control rounded-0'
                autoComplete='off'
              />
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
              <input
                type='text'
                id='username'
                placeholder='Enter Username'
                name='username'
                onChange={handleInput}
                className='form-control rounded-0'
                autoComplete='off'
              />
              {errors.username && <span className='text-danger'>{errors.username}</span>}
            </div>
            <div className='mb-3'>
              <input
                type='text'
                id='mobileNumber'
                placeholder='Enter Mobilenumber'
                name='mobileNumber'
                onChange={handleInput}
                className='form-control rounded-0'
                autoComplete='off'
              />
              {errors.mobileNumber && <span className='text-danger'>{errors.mobileNumber}</span>}
            </div>
            <div className='mb-3'>
              <input
                type='password'
                id='password'
                placeholder='Password'
                name='pwd'
                onChange={handleInput}
                className='form-control rounded-0'
              />
              {errors.pwd && <span className='text-danger'>{errors.pwd}</span>}
            </div>
            <div className='mb-3'>
              <input
                type='password'
                id='confirmPassword'
                placeholder='Confirm Password'
                name='confirmPwd'
                onChange={handleInput}
                className='form-control rounded-0'
              />
              {errors.confirmPwd && (
                <span className='text-danger'>{errors.confirmPwd}</span>
              )}
            </div>
            <div>
              <div className='col'>
                <button type='submit' id='submitButton'  className='btn btn-success w-100 rounded-0'>
                  Submit
                </button>
              </div>
              <div className='d-flex justify-content-center'>
                <p>Already an user?</p>
              </div>
              <div className='d-flex justify-content-center'>
                <Link to='/user/login' type='button' id='loginButton'  className='btn btn-primary rounded-0'>
                  Login
                </Link>
              </div>
              <Outlet />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;