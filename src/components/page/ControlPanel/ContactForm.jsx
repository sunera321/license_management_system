import React from 'react';
import axios from 'axios';
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
      <div className="p-8 pb-4 pt-1 pb-10  bg-slate-300 rounded-lg w-[50%] h-[60%] overflow-auto">
        <div>
          <button
            className="text-black  font-medium text-[15px]  pl-[540px]"
            onClick={onCloseClick}>
            x
          </button>
          <div className='text-[20px] font-semibold text-center mb-3'>Send e-mail from {client.name} <div />
          </div>
        </div>
        <form className='pt-5' onSubmit={handleSubmit}>  
          <table>
            <tbody>
              <tr className='h-[50px]'>
                <td className='font-semibold '>Email:</td>
                <td className='pl-4 '>
                  <input
                    className='w-[300px] h-[30px] border-1 border-black rounded-md pl-2'
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
                    className='w-[300px] h-[30px] border-1 border-black rounded-md pl-2'
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
                    className='w-[300px] border-1 border-black rounded-md pl-2'
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
                    className='w-[300px] h-[30px] border-1 border-black rounded-md pl-2'
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                  />
                </td>
              </tr>
              <tr className='h-[50px]'>
                <td></td>
                <td className=' pl-52'>
                  <input
                    type="submit"
                    value="Send"
                    className="mt-3 p-1 text-white bg-[#111158] rounded-md font-medium text-[15px] w-[100px] hover:bg-slate-100 hover:text-black"
                  />
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
