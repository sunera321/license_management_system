import React ,{useState} from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import Swal from 'sweetalert2';


const EditProfilePartner = () => {
   
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [PN, setPN] = useState('');
    const [Country, setCountry] = useState('');

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(Name,Email,PN,Country);
        
        Swal.fire({
    
            position: "top-center",
            icon: "success",
            title: "Updated Succesfully",
            showConfirmButton: false,
            timer: 1500
       
          })
    }
    return (
        <div>
           <PageHeader title={'Account Settings'} />
            <div className=''>
                <form  onSubmit={handleSubmit} className='w-2/5 px-10 pt-10 pb-20 mx-auto mb-10 bg-gray-100 rounded shadow-lg '>
                <div className="flex gap-0 mb-6 ">
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700'>ID</label>
                        <p className='flex-1'>ID</p>
                    </div>
                    <div className="mb-6 ">
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Name</label><br />
                        <input onChange={(e) => setName(e.target.value)} value={Name} type="text" required name="Name" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /> <br />
                    </div>
                    <div className='mb-6'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Email</label><br />
                        <input onChange={(e) => setEmail(e.target.value)} value={Email} type="text" required name="Email" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /><br />
                    </div>
                    <div className='mb-8'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Phone Number</label><br />
                        <input onChange={(e) => setPN(e.target.value)} value={PN} type="text" required name="PN" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /> <br />
                    </div>
                    <div className='mb-8'>
                        <label onChange={(e) => setCountry(e.target.value)} value={Country} className='block mx-3 mb-0 text-base font-semibold text-gray-700'>Country</label><br />
                        <input type="text"  name="PN" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /> <br />
                    </div>
                    <input  type='submit'    value='Submit' className="items-end w-48 p-2 mt-10 font-bold text-white bg-blue-900 rounded-md shadow-xl mb-28 hover:bg-indigo-500" />
             
                </form>
            </div>
            <div className='mt-4 '>
            
            </div>
        </div>
    );
};

export default EditProfilePartner;
