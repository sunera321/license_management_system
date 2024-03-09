import React, { useState, useEffect} from "react";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
const Testm = () => {

    const [show, setShow] = useState(false);

    const handleClose = ()=> setShow(false);
    const handleShow = ()=> setShow(true);

    const [ModuleImage, setModuleImage] = useState('');
    const [ModuleName, setModuleName] = useState('');
    const [ModuleDescription, setModuleDescription] = useState('');
    const [ModuleFeatures, setModuleFeatures] = useState('');
    

    const [editModuleImage, setEditId] = useState('');
    const [editModuleName, setEditName] = useState('');
    const [editModuleDescription, setEditModuleDescription] = useState('');
    const [editModuleFeatures, setEditModuleFeatures] = useState('');


    const module = [
        {
            ModuleImage: 1 ,
            ModuleName: PeopleHR,
            ModuleDescription: khvuigvkvjhv,
            ModuleFeatures: oooooooooo,uuuuuuuuuu,
            
        },
        {
            ModuleImage: 2 ,
            ModuleName: PeopleHR2,
            ModuleDescription: jfuyffffffv,
            ModuleFeatures: trsrs,nhv,
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
            setEditModuleImage(result.data.ModuleImage);
            setEditModuleName(result.data.ModuleName);
            setEditModuleDescription(result.data.ModuleDescription);
            setEditModuleFeatures(id);
            
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
            "ModuleImage": ModuleImage,
            "ModuleName": ModuleName,
            "ModuleDescription": ModuleDescription,
            "ModuleFeatures": ModuleFeatures

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
            "ModuleImage": ModuleImage,
            "ModuleName": ModuleName,
            "ModuleDescription": ModuleDescription,
            "ModuleFeatures": ModuleFeatures

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
           setModuleImage('');
           setModuleName('');
           setModuleDescription('');
           setModuleFeatures('');
           setEditModuleImage('');
           setEditModuleName('');
           setEditModuleDescription('');
           setEditModuleFeatures('');
    }
    
  
    return (
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
                        <th>ModuleImage</th>
                        <th>ModuleName</th>
                        <th>ModuleDescripton</th>
                        <th>ModuleFeatures</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ?
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.ModuleImage}</td>
                                        <td>{item.ModuleName}</td>
                                        <td>{item.ModuleDescripton}</td>
                                        <td>{item.ModuleFeatures}</td>
                                        
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
            <h1 className='my-8 mt-10 mb-8 font-serif text-5xl font-bold text-center text-black fill-gray-400'>ADD MODULES</h1>
            <div className='px-40 md:mx-96'>
                <form className='px-5 pt-2 pb-20 bg-gray-100 rounded shadow-lg '>
                    <div className="mb-6 ">
                        <label className='mb-2 text-lg font-bold text-gray-700 '>ModuleImage</label><br />
                        <input type="text" value={editModuleImage} onChange={(e) => setEditId(e.target.value)}  name="ModuleImage" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>
                    <div className='mb-6'>
                        <label className='mb-2 text-lg font-bold text-gray-700'>ModuleName</label><br />
                        <input type="text"  value={editModuleName} onChange={(e) => setEditName(e.target.value)}  name="ModuleName" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /><br />
                    </div>
                    <div className='mb-6'>
                        <label className='mb-1 text-lg font-bold text-gray-700'>ModuleDescription</label><br />
                        <input type="text"  value={editEmail} onChange={(e) => setEditModuleDescription(e.target.value)}  name="ModuleDescription" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>
                    
                    <div className='mb-6'>
                        <label className='mb-1 text-lg font-bold text-gray-700'>ModuleFeatures</label><br />
                        <input type="text"  value={editEmail} onChange={(e) => setEditModuleFeatures(e.target.value)}  name="ModuleFeatures" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
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
}



export default Testm;