import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const ContactForm = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);
      setMessage('');
      emailjs
      .sendForm('service_hfboa7t', 'template_iw30vio', form.current, {
        publicKey: 'FuwmPu4_JqlQdX_W1',
      })
      .then(
        () => {
          setLoading(false);
          setMessage('Message sent successfully! 😊');
          setMessageType('success');
        },
        (error) => {
          setLoading(false);
          setMessage('Failed to send message. Please try again.😞');
          setMessageType('error');
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="font-semibold text-5xl  font-serif title-font mb-4 text-black">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
              For more Feel free to Contact us 

            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label assName="leading-7 text-sm text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                 
                required
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label lassName="leading-7 text-sm text-black">
                    Email
                    
                  </label>
                  <input
                  
                  type='email'
                    name="user_email"
                   
                required
                   
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              
              <div className="p-2 w-full">
             
                <div className="relative">
                  <label  className="leading-7 text-sm text-black">
                    Message
                    
                  </label>
                  <textarea
                 required
                    name="message"
                 
                
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                 type='submit'
                  className="focus:ring-2 focus:ring-indigo-600 transition-transform duration-300 hover:scale-105 focus:outline-none flex items-center gap-4  font-sans mx-auto text-white bg-indigo-500 border-0 py-2 px-12  hover:bg-indigo-600 rounded text-lg">
             { loading ? (<><FontAwesomeIcon icon={faSpinner} spinPulse /></>):(<FontAwesomeIcon icon={faPaperPlane}  />)}  {loading ? 'Sending...' : 'Send'}
                </button>
                
                {message && (
            <div className={`mt-4 text-lg ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {message}
              </div>  
                )}   
            </div>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;