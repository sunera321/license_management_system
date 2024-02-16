import {useState} from 'react';
import StepperControl from '../components/hooks/StepperControl'
import Stepper from '../components/hooks/Stepper'
import Account from '../components/steps/Account'
import Details from '../components/steps/Details'
import Final from '../components/steps/Final'
import { StepperContext } from '../components/hooks/StepperContext';
import Navbar2 from '../components/inc/NavBar2';
import backgroundImg from '../components/asserts/Media/background1.jpg';
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
    <div className="flex justify-center items-center w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImg})` }}>
    <div className="w-2/5 h-300 bg-white p-5 rounded-lg relative">
        <h1 className="text-3xl font-bold text-center mt-8">Create account</h1>

        <div className='container horizontal mt-5'>
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
                        <p className="text-center mt-4 text-sm">Already have an account? <a href="/login" className="text-black font-bold">Login</a></p>
                    )}
    
    </div>
    </div>
    <Footer2/>
    </>
  );
}

export default RegisterHsenid;
