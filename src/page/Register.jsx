import {useState} from 'react';
import StepperControl from '../components/hooks/StepperControl'
import Stepper from '../components/hooks/Stepper'
import Account from '../components/steps/Account'
import Details from '../components/steps/Details'
import Final from '../components/steps/Final'
import { StepperContext } from '../components/hooks/StepperContext';
import Navbar2 from '../components/inc/NavBar2';
import backgroundImg from '../Images/Back.jpg';
import Footer2 from '../components/inc/Footer2';



function RegisterHsenid () {

    const[currentStep,setCurrentStep] = useState(1);
   const [userData,setUserData] = useState('');
   const [finalData,setFinalData] = useState([]);
    const steps = [
        'Account Information',
        'Personal Details',
        'Pasword configuration'
    ];
    const displayStep=(step)=>{
        switch(step){
            case 1:
                return<Account/>
                case 2:
                    return<Details/>
                    case 3:
                        return<Final/>
                        default:
                            
                
        }
    }

    const handleClick =(direction)=>{

        let newStep =currentStep;
        direction==="next"?newStep++ : newStep--;
        //checks if steps are within bounds

        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }
  return (
    <>
    <Navbar2/>
    <div className="flex items-center justify-center w-full h-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${backgroundImg})` }}>
    <div className="relative w-2/5 p-5 bg-white rounded-lg h-300">
        <h1 className="mt-8 text-3xl font-bold text-center">Create account</h1>

        <div className='container mt-5 horizontal'>
    <Stepper
    steps={steps}
    currentStep={currentStep}/>
    {/*display component*/}
    <div className='my-10 p-10s'>
        <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
        }}>
            {displayStep(currentStep)}
            
        </StepperContext.Provider>
    </div>



    </div>
    <StepperControl
    handleClick={handleClick}
    currentStep={currentStep}
    steps={steps}
    />
    
                    {currentStep === 1 && (
                        <p className="mt-4 text-sm text-center">Already have an account? <a href="/login" className="font-bold text-black">Login</a></p>
                    )}
    
    </div>
    </div>
    <Footer2/>
    </>
  );
}

export default RegisterHsenid;
