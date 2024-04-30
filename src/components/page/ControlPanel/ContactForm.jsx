import React from 'react';
import axios from 'axios';
import backgroundImage from '../../asserts/Media/background1.jpg';
import Swal from 'sweetalert2';

const ContactForm = ({ client, onCloseClick }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, subject, description,contactInfo } = e.target.elements;

    try {
      const response = await axios.post('https://localhost:7295/api/ContactMail', {
        to: email.value,
        name: client.name,
        subject: subject.value,
        description: description.value,
        contactInfo: contactInfo.value // Assuming you have this in your client object
        
      });

      // Handle successful response
      console.log('Email sent:', response.data);
  
      Swal.fire({

        position: "top-center",
        icon: "success",
        title: "Form Submitted ",
        showConfirmButton: false,
        timer: 1500

    })

      // Optionally, you can do something after the email is sent, like closing the form
      onCloseClick();
    } catch (error) {
      // Handle error
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
      <div className="p-8 pb-2 pt-1   rounded-lg w-[50%] h-[60%] overflow-auto" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div>
          <button
            className="text-black  font-medium text-[20px]  pl-[540px]"
            onClick={onCloseClick}>
            x
          </button>
          <div className='text-[20px] font-semibold text-center mb-1'>Send e-mail from {client.name} <div />
          </div>
        </div>
        <form className='pt-2 pl-5' onSubmit={handleSubmit}>  
          <table>
            <tbody>
              <tr className='h-[50px]'>
                <td className='font-semibold '>Email:</td>
                <td className='pl-4 '>
                  <input
                    className='w-[325px] h-[30px] border-1 border-black rounded-md pl-2'
                    placeholder={client.email}
                    type="email"
                    id="email"
                    name="email"
                    
                    
                  />
                </td>
              </tr>
              <tr className='h-[50px]'>
                <td className='font-semibold '>Subject:</td>
                <td className='pl-4 '>
                  <input
                    className='w-[325px] h-[30px] border-1 border-black rounded-md pl-2'
                    type="text"
                    id="subject"
                    name="subject"
                  />
                </td>
              </tr>
              <tr className='h-[50px]'>
                <td className='font-semibold '>Description:</td>
                <td className='pl-4 '>
                  <textarea
                    className='w-[325px] border-1 border-black rounded-md pl-2'
                    id="description"
                    name="description"
                    rows="4"
                    cols="50"
                    required
                  ></textarea>
                </td>
              </tr>
              <tr className='h-[50px]'>
                <td className='font-semibold '>contactInfo:</td>
                <td className='pl-4 '>
                 
                   <input
                    className='w-[325px] h-[30px] border-1 border-black rounded-md pl-2'
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                  />
                </td>
              </tr>
              <tr className='h-[50px]'>
                <td></td>
                <td className=' pl-52'>
              
                  <button type="submit" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                    <svg class="w-4 h-4 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    Send Email
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
