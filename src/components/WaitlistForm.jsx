import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WaitlistForm = ({ onClose }) => {
  // Form state
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/waitlist', {
        username,
        email,
        phonenumber,
      });
      setMessage('Successfully added to the waitlist!');
      setUsername('');
      setEmail('');
      setPhonenumber('');
      toast.success("Added to waitlist!")
      onClose()
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-[90vw] sm:max-w-md mx-auto bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-[#2f3e2e] mb-6 tracking-wide">
        Join the Waitlist
      </h2>
      <form onSubmit={handleRegister} className="space-y-5 relative left-6 md:left-0 text-[#2f3e2e]">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="md:w-full w-[80%] px-4 sm:px-5 py-2.5 sm:py-3 rounded-md bg-white bg-opacity-40 border border-[#2f3e2e] border-opacity-50 placeholder-[#2f3e2e] focus:outline-none focus:ring-2 focus:ring-[#2f3e2e] text-sm sm:text-base"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="md:w-full w-[80%] px-4 sm:px-5 py-2.5 sm:py-3 rounded-md bg-white bg-opacity-40 border border-[#2f3e2e] border-opacity-50 placeholder-[#2f3e2e] focus:outline-none focus:ring-2 focus:ring-[#2f3e2e] text-sm sm:text-base"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            className="md:w-full w-[80%] px-4 sm:px-5 py-2.5 sm:py-3 rounded-md bg-white bg-opacity-40 border border-[#2f3e2e] border-opacity-50 placeholder-[#2f3e2e] focus:outline-none focus:ring-2 focus:ring-[#2f3e2e] text-sm sm:text-base"
            required
          />
        </div>
        <button
          type="submit"
          className="md:w-full w-[80%] bg-[#2f3e2e] text-white font-semibold py-2.5 sm:py-3 rounded-md hover:bg-[#3e543a] transition-all text-sm sm:text-base"
        >
          Join Waitlist
        </button>
      </form>
      {message && (
        <p className="mt-5 text-center text-xs sm:text-sm text-[#2f3e2e] font-medium">
          {message}
        </p>
      )}
    </div>
  );
};

export default WaitlistForm;