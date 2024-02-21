import React from 'react'
import PageHeader from '../components/CommonModal/pageHeader'

const CompearData = () => {
  return (
    <div class="min-h-screen">
        <PageHeader title="Compear Data" />
        <div className="text-[20px] font-bold pl-11">
                Client ID : 123
        </div>

           

<div class=" content-center flex mt-10">
  
    <table class="  content-center  mx-auto w-10/12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                    Check Data
                </th>
                <th scope="col" class="px-6 py-3">
                    Crrent Data
                </th>
                <th scope="col" class="px-6 py-3">
                    Actual Data
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 h-32   ">
                <th  class="pl-3 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-1/5">
                    Mac Address
                </th>
                <td class="px-6 py-4 w-2/5">
                        98-FA-9B-17-79-26
                </td>
                <td class="px-6 py-4 w-2/5">
                        98-FA-9B-17-79-26
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 h-32 ">
                <th  class="pl-3 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-1/5">
                    Modules Names
                </th>
                <td class="px-6 py-4 w-2/5 pl-9">
                    <ul className="list-disc">
                        <li>People's HR</li>
                        <li>People's HR</li>
                        <li>People's HR</li>
                        <li>People's HR</li>
                     
                    </ul>
                </td>
                <td class="px-6 py-4 w-2/5 pl-9">
                    <ul className="list-disc">
                        <li>People's HR</li>
                        <li>People's HR</li>
                        <li>People's HR</li>
                        <li>People's HR</li>
                     
                    </ul>
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 h-32 ">
                <th  class="pl-3 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-1/5">
                   Host URL
                </th>
                <td class="px-6 py-4 w-2/5">
                    https://exampel.com
                </td>
                <td class="px-6 py-4 w-2/5">
                    https://exampel.com
                </td>
                
            </tr>
         
           
        </tbody>
    </table>
</div>


        </div>
        
   
  )
}

export default CompearData