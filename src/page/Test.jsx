import React, { useState, useEffect} from "react";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
const Test = () => {

    const [show, setShow] = useState(false);

    const handleClose = ()=> setShow(false);
    const handleShow = ()=> setShow(true);

    const [ID, setId] = useState('');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    

    const [editId, setEditId] = useState('');
    const [editName, setEditName] = useState('');
    const [editEmail, setEditEmail] = useState('');
    
    const empdata = [
        {
            ID: 1,
            Name: 'Manoj',
            Email: 25,
            
        },
        {
            ID: 2,
            Name: 'Mano',
            Email: 20,
            
        }
    ]

    const [data, setData] = useState([]);
    
     useEffect(() => {
         getData();
     }, [])
   
    const getData =() =>{
        axios.get('http://localhost:5295/api/Employee')
        .then((result)=>{
           setData(result.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const handleEdit = (id) => {
        
        handleShow(); 
        axios.get(`http://localhost:5295/api/Employee/${ID}`)
        .then((result)=>{
            setEditName(result.data.Name);
            setEditEmail(result.data.Email);
            setEditId(id);
            
        })
        .catch ((error)=>{
            toast.error(error);
        })
    }   
    const handleDelete = (ID) => {
        if(window.confirm('Are you sure you want to delete?') == true) {
            axios.delete(`http://localhost:5295/api/Employee/${ID}`)
            .then((result)=>{
                if(result.status ===200)
                {
                    toast.success('Employee has been deleted successfully');
                    getData();
                }
            })
            .catch ((error)=>{
                toast.error(error);
            })
            
        } 
    }  
    const hanleUpdate = () => {
        const url = `http://localhost:5295/api/Employee/${editId}`;
        const data = {
            "ID": editId,
            "Name": editName,
            "Email": editEmail
        }
        axios.put(url, data)
        .then((result)=>{
            handleClose();
            getData();
            clear();
            toast.success('Data Updated Successfully');
        }).catch((error)=>{
            toast.error(error);
        })
    }
    const handleSave = () => {
        const url = `http://localhost:5295/api/Employee`;
        const data ={
            "ID": ID,
            "Name": Name,
             "Email": Email
        }

        axios.post(url, data)
        .then((result)=>{
            getData();
            clear();
            toast.success('Data Saved Successfully');
        }).catch((error)=>{
            toast.error(error);
        })
    }

    const clear =()=>{
           setId('');
           setName('');
           setEmail('');
           setEditId('');
           setEditName('');
           setEditEmail('');
    }
    
    return(
        

     <div>
        <ToastContainer/>
        <form>
            
        <input className="border " type="text" value={ID} onChange={(e) => setId(e.target.value)}/>
        <input type="text" className="border " value={Name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" className="border " value={Email} onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={()=> handleSave()}>Submit</button>
        </form>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ?
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.ID}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Email}</td>
                                        
                                        <td colSpan={2}>
                                            <button className='' onClick={()=>handleEdit(item.ID)}> Edit</button>&nbsp;
                                            <button onClick={()=>handleDelete(item.ID)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            'Loading...'
                    }

                </tbody>
            </table>
            <h1 className='my-8 mt-10 mb-8 font-serif text-5xl font-bold text-center text-black fill-gray-400'>EDIT PROFILE</h1>
            <div className='px-40 md:mx-96'>
                <form className='px-5 pt-2 pb-20 bg-gray-100 rounded shadow-lg '>
                    <div className="mb-6 ">
                        <label className='mb-2 text-lg font-bold text-gray-700 '>Emp ID</label><br />
                        <input type="text" value={editId} onChange={(e) => setEditId(e.target.value)}  name="ID" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>
                    <div className='mb-6'>
                        <label className='mb-2 text-lg font-bold text-gray-700'>Name</label><br />
                        <input type="text"  value={editName} onChange={(e) => setEditName(e.target.value)}  name="Name" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /><br />
                    </div>
                    <div className='mb-6'>
                        <label className='mb-1 text-lg font-bold text-gray-700'>Email</label><br />
                        <input type="text"  value={editEmail} onChange={(e) => setEditEmail(e.target.value)}  name="Email" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>
                    
                    <div className='mb-5 '>
                        <button id='submit' onClick={hanleUpdate} type='submit' className='max-w-xl px-4 py-2 text-white bg-blue-900 rounded float-end hover:bg-blue-700'>SUBMIT</button>
                    </div>

                </form>
            </div>
            <div className='mt-4 '>

            </div>
         </div>
         
        
    );
};
export default Test;
