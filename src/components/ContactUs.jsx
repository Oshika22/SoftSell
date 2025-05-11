import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form submission logic here (e.g., fetch/axios call)
  };
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-8 rounded-2xl bg-gradient-to-r from-[#140152] to-[#0D00A4] text-white shadow-md">
        <h1 className="text-6xl text-center mb-3 font-bold leading-tight">Contact Us</h1>
        <p className="text-center text-lg">
          Have questions or need assistance? We're here to help!
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto p-6 rounded-xl shadow-md space-y-4"
        >
          

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 border rounded-lg focus:outline-none bg-transparent focus:ring focus:border-blue-500"
            required
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border rounded-lg bg-transparent focus:outline-none focus:ring focus:border-blue-500"
            required
          />

          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full p-3 border rounded-lg bg-inherit focus:outline-none focus:ring focus:border-blue-500"
          />

          <select
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-inherit focus:outline-none focus:ring focus:border-blue-500"
            required
          >
            <option value="" className='text-black'>Select License Type</option>
            <option value="Commercial" className='text-black'>Commercial</option>
            <option value="Personal" className='text-black'>Personal</option>
            <option value="Enterprise" className='text-black'>Enterprise</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Message"
            className="w-full p-3 border rounded-lg bg-inherit focus:outline-none focus:ring focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0D00A4] to-[#04052E] text-white py-3 rounded-lg hover:from-[#22007C] hover:to-[#0D00A4] transition"
          >
            Send Message 
            <FontAwesomeIcon icon={faPaperPlane} className='ml-1'/>
          </button>
        </form>
      </div>
    </div>
  );
};
