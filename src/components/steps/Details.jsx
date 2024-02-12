import { useContext } from 'react';
import { StepperContext } from '../hooks/StepperContext';

export default function Details() {
    const { userData, setUserData } = useContext(StepperContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className='flex flex-col'>
            <div className='w-full mx-2 flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    Department
                </div>
                <div className='bg-white my-2 p-1 flex border-gray-200 rounded w-1/2'>
                    <select 
                        onChange={handleChange}
                        value={userData["department"] || ""}
                        name="department"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800">
                        <option value="">Select Department</option>
                        <option value="Finance">Finance Department</option>
                        <option value="Management">Management Department</option>
                    </select>
                </div>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    Employee ID
                </div>
                <div className='bg-white my-2 p-1 flex border-gray-200 rounded w-1/2'>
                    <input 
                        onChange={handleChange}
                        value={userData["employeeId"] || ""}
                        name="employeeId"
                        placeholder="Enter Employee ID"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                </div>
            </div>
        </div>
    );
}
