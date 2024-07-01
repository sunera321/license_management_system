import React from 'react'
import Company from '../Images/nav_logo.png'


const Footer = () => {
  return (
    <footer className=" to-gray-300 from-[#EEEBEB] bg-gradient-to-l">
        <div className="justify-between pt-4 ">
            <div className="flex justify-between ml-14 mr-14 ">
                <div className="">
                 <a href="https://hsenidbiz.com/" className="items-center ">
                  <div className="text-[20px] font-bold ">Company</div>
                 
                      <img src={Company} className="h-[40px] w-[200px] mt-5" alt="cpmpany Logo" />
                  </a>
                </div>
             
                   
                  <div className="hidden sm:inline-flex">
                     
                      <ul className="text-gray-600 dark:text-gray-600 font-medium text-[13px]">
                      <h2 className="mb-2 text-sm text-[15px] text-gray-900 font-semibold uppercase dark:text-black">SERVICES</h2>
                          <li className="mb-1">
                              <a href="/components/page/" className="hover:underline">Mobile_Solution</a>
                          </li>
                          <li>
                              <a href="/components/page/" className="hover:underline">Hospitality_Services</a>
                          </li>
                          
                      </ul>
                  </div>
                  <div className="hidden sm:inline-flex">
                    
                      <ul className="text-gray-600 dark:text-gray-600 font-medium text-[13px]">
                        <h2 className="mb-2 text-sm text-[15px] text-gray-900 font-semibold uppercase dark:text-black">LEGAL</h2>
                        <li className="mb-1">
                              <a href="/components/page/" className="hover:underline">Privacy_Policy</a>
                          </li>
                          <li>
                              <a href="/components/page/" className="hover:underline">Terms&Conditions</a>
                          </li>
                      </ul>
                  </div>
                        <div className="-ml-5 ">
                           
                            <ul className="font-medium text-gray-900 hover:text-gray-400">
                                <li className="mb-3 ml-1">
                                    <a href=" info@hsenidbiz.com" className="hover:underline">info@hsenidbiz.com</a>
                                </li>
                                <li className="mb-3 ml-1">
                                    <a href=" info@hsenidbiz.com" className="hover:underline"> +94 11 462 1111</a>
                                </li>
                                <div className="flex mx-auto  lg:mt-4">
                                    <a href="/components/page/" className="text-gray-900 hover:text-gray-400">
                                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                                <path fillrule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" cliprule="evenodd"/>
                                            </svg>
                                        
                                    </a>
                                    
                                      <a href="/components/page/" className="text-gray-900 hover:text-gray-400 ms-5"> 
                                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                            <path fillrule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" cliprule="evenodd"/>
                                        </svg>
                                       
                                    </a>
                                      <a href="/components/page/" className="text-gray-900 hover:text-gray-400 ms-5"> 
                                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillrule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" cliprule="evenodd"/>
                                        </svg>
                                        
                                    </a>
                                     
                                </div>
                      </ul>
                  </div>
                  
              
          </div>
         
        
        </div>
        <div className="mx-auto mt-2 text-center ">
              <span className="text-sm text-gray-700 ">© 2023 <a href="https://hsenidbiz.com/" className="hover:underline">hSenidBiz.com</a>. All Rights Reserved.
              </span>
          </div>
        
    </footer>
    
  )
}

export default Footer