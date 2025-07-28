
import './a2.css';
import { useState } from 'react';

const About = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    codeNumber: ''
  });

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://resturbackend.vercel.app/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('User data submitted successfully');
      } else {
        alert('Failed to submit user data: ' + response.statusText);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <main className="about">
      <div className="container content">
        <form onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="phone number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="codeNumber"
            placeholder="enter the item code"
            value={formData.code}
            onChange={handleChange}
            required
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </main>
  );
};

export default About;
