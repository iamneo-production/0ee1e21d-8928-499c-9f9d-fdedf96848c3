import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email: '',
    pwd: ''
  });
  const navigate = useNavigate();
  const [errors, setError] = useState('');

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = LoginAuth(values);
    setError(validationErrors);

    if (validationErrors.email === '' && validationErrors.pwd === ''){
      try {
        const res = await axios.post('http://localhost:8081/user/login', values);
        if (res.data.Status === 'Success') {
          const userId = res.data.id; // Assuming the server provides the user ID in the response

          if (values.email === 'admin' && values.password === 'admin') {
            localStorage.setItem('authenticatedUser', false);
            localStorage.setItem('authenticatedAdmin', true);
          } else {
            localStorage.setItem('authenticatedUser', true);
            localStorage.setItem('authenticatedAdmin', false);
            localStorage.setItem('loggedInUserId', userId);
          }

          if (values.email === 'admin' && values.password === 'admin') {
            navigate('/admin');
          } else {
            navigate('/home');
          }
        } else {
          navigate('/user/signup');
          alert('Invalid Credentials Please Register');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center p-4 w-100 loginHead'>
        <strong>Login</strong>
      </div>
      <br />
      <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-1 rounded w-25 loginForm'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <input
                type='text'
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
                type='password'
                id='password'
                placeholder='Enter Password'
                name='pwd'
                onChange={handleInput}
                className='form-control rounded-0'
              />
              {errors.pwd && <span className='text-danger'>{errors.pwd}</span>}
            </div>


            
            <div className='row'>
              <div className='col-4'>
                <button type='submit' id='loginButton' className='btn btn-success w-100 rounded-0'>
                  Log in
                </button>
              </div>
              <div className='col-4'>
                <div className='mt-1 text-center'>
                  <p>New User/admin?</p>
                </div>
              </div>
              <div className='col-4'>
                <Link to='/user/signup' type='button' id='signupLink' className='btn btn-primary rounded-0'>
                  Sign up
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

export default Login;