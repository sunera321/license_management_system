import React,{useState , useEffect} from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import Accept from '../components/CommonModal/Accept'
import Reject from '../components/CommonModal/Reject';
import Provide from '../components/CommonModal/Provide';
import Issue from '../components/CommonModal/Issue';
import Disable from '../components/CommonModal/Disable';
import axios from 'axios';
const Status = () => {
    const [show, setShow] = useState(false);

    const getData =() =>{
        axios.get('http://localhost:5295/api/Client')
        .then((result)=>{
           setData(result.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const empdata = [
        {
            ClientID: 1,
            ClientName: 'Manoj',
            Pmanger: <Accept value='Accept'/>,
            HManger:<Accept value='Accept'/>,
            Issue:<Issue value='Issue'/>
            
        },
        {
            ClientID: 2,
            ClientName: 'Manoj',
            Pmanger: <Accept value='Accept'/>,
            HManger:<Accept value='Accept'/>,
            Issue:<Provide value='Provide'/>
            
        }
        ,
        {
            ClientID: 3,
            ClientName: 'Manoj',
            Pmanger: <Reject value='Reject'/>,
            HManger:<Accept value='Accept'/>,
            Issue:<Disable value='Disable'/>
            
        } ,
        {
            ClientID:4 ,
            ClientName: 'Manoj',
            Pmanger: <Reject value='Reject'/>,
            HManger:"InProgress",
            Issue:'InProgress'
            
        }
    ]
    const [data, setData] = useState([]);
    
     useEffect(() => {
         setData(empdata);
     }, [])
    return (
        <div><PageHeader title='Approval Status' />
      
            <div className='mt-10'>
                <table className= "content-center w-2/4 mx-auto bg-white border border-separate table-auto mb-11 border-spacing-2 border-slate-500 caption-top">
                    <thead className='bg-indigo-100 ' ><th className='px-0 py-3 mx-0 text-lg font-semibold'>Client ID</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Client name</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Client Data</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Partner Manager</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Finance manager</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Issue</th></thead>
                    <tbody  >
                    {
                        data && data.length > 0 ?
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                    <td className='px-20 py-2 text-base text-center border-b-2 border-slate-500' >{item.ClientID}</td>
                                    
                            <td className='px-20 py-2 text-base text-center border-b-2 mx-45 border-slate-500'>{item.ClientName}</td>
                            <td><button>View</button></td>
                            <td className='px-20 py-2 text-base border-b-2 mx-45 border-slate-500'><div className=''>{item.Pmanger}</div></td>
                            <td className='px-20 py-2 text-base border-b-2 mx-45 border-slate-500'><div >{item.HManger}</div></td>

                            <td className='align-middle border-b-2 border-slate-500'>{item.Issue}</td>
                                    </tr>
                                )
                            })
                            :
                            'Loading...'
                    }
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Status;
