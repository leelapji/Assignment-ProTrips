import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName) {
      setMessage('Please enter your first name!');
    } else if (!formData.lastName) {
      setMessage('Please enter your last name!');
    } else if (!formData.email) {
      setMessage('Please enter your email!');
    } else if (!formData.contacts) {
      setMessage('Please enter your contacts!');
    } else {
      setMessage('Registration successful!');
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="contacts"
          placeholder="Contacts"
          value={formData.contacts}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistrationForm;
