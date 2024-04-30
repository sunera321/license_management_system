import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import backgroundImage from '../components/asserts/Media/Screenshot 2024-04-23 112913.png';import { useParams } from 'react-router-dom';
;

const SendKey = () => {
// Take the parameter of URL
const params = useParams();
  const key = params.key;
  
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, licenseKey } = e.target.elements;

    try {
      const response = await axios.post('https://localhost:7295/api/KeyEmail', {
        to: email.value,
        licenseKey: licenseKey.value,

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

    } catch (error) {
      // Handle error
      console.error('Error sending email:', error);
    }
  };


  return (


    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
      <section className="flex items-center justify-center h-screen overflow-hidden" >
        <div className="flex items-center justify-center w-2/6 rounded-l-lg shadow-2xl bg-gradient-to-r from-emerald-950 to-green-100 h-2/3">
          <img src={backgroundImage} className="w-100% h-[100%]" alt=" image" />
        </div>
        <div className="relative flex flex-col w-1/3 p-5 pt-3 rounded-r-lg shadow-2xl h-2/3 bg-green-50">
          <div className=" lg:text-left">
            <h2 className="font-bold text-center text-gray-800 text-[20px]">Send License Key Form Clinet<br /></h2>

            <div>
              <form className='pt-5' onSubmit={handleSubmit} >
                <label className='font-semibold text-[18px] '>email</label><br />
                <input
                  type='text'
                  name='email'
                  className='border-2 rounded-lg border-zinc-300 bg-slate-100 w-[90%]'
                />
                <label className='font-semibold text-[18px] '>License key</label><br />
                <input
                  type='text'
                  name='licenseKey'
                  className=' border-2 rounded-lg border-zinc-300 bg-slate-100 w-[90%]'
                  placeholder={key}
                  disabled
                />

                <label className='font-semibold text-[18px] '>License key Description</label><br />
                <textarea
                  name="description"
                  rows="3"

                  className='mt-2 border-2 rounded-lg border-zinc-300 bg-slate-100 w-[90%]'
                >
                </textarea>

                <label className='font-semibold text-[18px] '>Contact Info</label><br />
                <input
                  type='text'
                  name="ContactInfo"
                  className='mt-2 border-2 rounded-lg border-zinc-300 bg-slate-100 w-[90%]'
                />
                <div className='flex items-center justify-center mt-6'>
                  
                  <button type="submit" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                    <svg class="w-4 h-4 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    Send license Key
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
     
    </div>



  )
}

export default SendKey




