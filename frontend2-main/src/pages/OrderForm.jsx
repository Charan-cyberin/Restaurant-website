import './a2.css';
import { useState } from 'react';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        codeNumber: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, phone, address, codeNumber } = formData;

        const subject = encodeURIComponent('New Order Request');
        const body =
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone Number: ${phone}\n` +
            `Delivery Address: ${address}\n` +
            `Order Code: ${codeNumber}`;

        const encodedBody = encodeURIComponent(body);


        // Opens default mail app with pre-filled details
        window.location.href = `mailto:itsrainytime0k@gmail.com?subject=${subject}&body=${encodedBody}`;
    };

    return (
        <main className="about">  {/* Keeps same background styling */}
            <div className="container content">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Delivery Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="codeNumber"
                        placeholder="Order Code"
                        value={formData.codeNumber}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Place Order</button>
                </form>
            </div>
        </main>
    );
};

export default OrderForm;
