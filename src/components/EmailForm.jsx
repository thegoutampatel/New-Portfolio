import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const EmailForm = () => {
  const formRef = useRef(); // Reference to the form element
  const [error, setError] = useState(null); // State to store error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission status

  // Function to handle form submission
  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true); // Set submission status to true

    try {
      // Access environment variables
      const serviceId = import.meta.env.REACT_APP_SERVICE_ID;
      const templateId = import.meta.env.REACT_APP_TEMPLATE_ID;
      const publicKey = import.meta.env.REACT_APP_PUBLIC_KEY;

      // Send email using EmailJS
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      });

      console.log('Email sent successfully!');
      setError(null); // Clear any previous errors
      formRef.current.reset(); // Reset the form after successful submission
    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Failed to send email. Please try again later.'); // Set error message
    } finally {
      setIsSubmitting(false); // Set submission status back to false
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="max-w-md mx-auto mt-8 p-8 rounded">
      <div className="mb-4">
        <label htmlFor="user_name" className="block mb-1 text-white text-[15px]">Name</label>
        <input type="text" name="user_name" id="user_name" required className="w-full p-5 border border-grey rounded text-black focus:outline-orange  text-[10px]" />
      </div>
      <div className="mb-4">
        <label htmlFor="user_email" className="block mb-1 text-white text-[15px]">Email</label>
        <input type="email" name="user_email" id="user_email" required className="w-full p-5 border border-grey rounded text-black focus:outline-orange text-[10px]" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1 text-white text-[15px]">Message</label>
        <textarea name="message" id="message" rows="4" cols="50" required className="w-full p-5 border border-grey rounded text-black focus:outline-orange text-[10px]"></textarea>
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message if present */}
      <button type="submit" className={`gap-3 bg-orange px-8 py-3 rounded-lg text-[15px] ${isSubmitting && 'opacity-50 pointer-events-none'}`}>
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default EmailForm;
