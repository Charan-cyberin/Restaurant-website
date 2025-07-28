import { useState } from 'react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    orderCode: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `New Order from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AAddress: ${formData.address}%0D%0AOrder Code: ${formData.orderCode}`;
    const mailtoLink = `mailto:itsrainytime0k.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="container mt-5">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="form-control mb-3" />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="form-control mb-3" />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="form-control mb-3" />
        <input type="text" name="address" placeholder="Delivery Address" value={formData.address} onChange={handleChange} required className="form-control mb-3" />
        <input type="text" name="orderCode" placeholder="Order Code" value={formData.orderCode} onChange={handleChange} required className="form-control mb-3" />
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
