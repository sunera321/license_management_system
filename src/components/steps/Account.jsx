import { useContext } from 'react';
import { StepperContext } from '../hooks/StepperContext';

export default function Account() {
    const { userData, setUserData } = useContext(StepperContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className='flex flex-col'>
            <div className='w-full mx-2 flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    Name
                </div>
                <div className='bg-white my-2 p-1 flex border-gray-200 rounded w-1/2'>
                    <input 
                        onChange={handleChange}
                        value={userData["name"] || ""}
                        name="name"
                        placeholder="Enter Name"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                </div>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    Email
                </div>
                <div className='bg-white my-2 p-1 flex border-gray-200 rounded w-1/2'>
                    <input 
                        onChange={handleChange}
                        value={userData["email"] || ""}
                        name="email"
                        placeholder="Enter Email"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                </div>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    Phone Number
                </div>
                <div className='bg-white my-2 p-1 flex border-gray-200 rounded w-1/2 '>
                    <input 
                        onChange={handleChange}
                        value={userData["phonenumber"] || ""}
                        name="phonenumber"
                        placeholder="Enter Number"
                        type="phonenumber"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                </div>
            </div>
           
        </div>
    );
}
