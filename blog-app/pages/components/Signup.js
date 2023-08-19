
import React, { useState } from 'react';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch('./api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          repeatPassword: '',
        });
      } else {
        console.error('Error submitting form data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
    <div className='card    , top' >
      
      <form className='form' onSubmit={handleSubmit} >
      <h2>SIGNUP</h2>
        <label>
          <input
            placeholder='Firstname'
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            minLength={3}
            maxLength={20}
            required
          />
        </label>
        <br/>
        <br/>
        <label>
        
          <input
            placeholder='Lastname'
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            minLength={1}
            maxLength={20}
            required
          />
        </label>
        <br/>
        <br/>
        <label>
          
          <input
            placeholder='Email'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
          />
        </label>
        <br/>
        <br/>
        <label>
        
          <input
            placeholder='Password'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            minLength={8}
            pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,}$"
            required
          />
        </label>
        <br/>
        <br/>
        <label>
        
          <input
            placeholder='Confirm Password'
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleInputChange}
            minLength={8}
            pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,}$"
            required
          />
        </label>
        <br/>
        <br/>
        <button type="submit">Sign Up</button>
        <br/>
      </form>
    </div>
  );
};

export default SignupForm;
