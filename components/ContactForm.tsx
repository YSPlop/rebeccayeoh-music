import React, { useState } from 'react';
import styles from '../styles/contactform.module.css';
import { sendEmail } from '../utils/send-mail'; // Import the sendEmail function

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  // const [submitted, setSubmitted] = useState(false);
  const introMessage = "We're happy to help! If you have order status-related questions, please check our page. If you still need help, we'll respond to your message below."

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.mobile) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      // Use sendEmail to send the form data
      await sendEmail(formData);

      // setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: '',
      });
    } catch (err) {
      console.error('Form submission error:', err);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <h2>Contact Us</h2>
      <p>
        {introMessage}
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mobile">Mobile Number*</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}" // Optional: pattern to enforce a 10-digit mobile number
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
