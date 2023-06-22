import React , { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';




const AddEmployee = () => {
  const [employee , setEmployee] = useState({
    id : "",
    firstName : "",
    lastName : "",
    emailId : "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee , [e.target.name]: value})
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee).then((response) => {
      console.log(response)
      navigate("/employeeList")
    })
    .catch ( (error) => {
        console.log(error);  
    })
 
  }

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id : "",
      firstName : "",
      lastName : "",
      emailId : "",
    });
  

  }

  return (
    <div className="flex max-w-xl mx-auto shadow bottom-b rounded bg-gray-100 content-center">
        <div  className='px-6 py-6 mx-auto '>
            <div className='font-thin text-2xl  tracking-wider'>
                <h1>Add Employee</h1>
            </div>
            <div className=' items-center justify-center h-14 w-full my-6'>
                <label className='block text-grey-600 text-sm font-normal'>
                  First Name
                </label>
                <input type='text' 
                       name = 'firstName'
                       value = {employee.firstName}
                       onChange={(e) => handleChange(e)}
                       className='h-10 w-96  rounded border-2 mt-2 px-2 py-2'></input>
            </div>
            <div className=' items-center justify-center h-14 w-full my-6'>
                <label className='block text-grey-600 text-sm font-normal '>
                  Last Name
                </label>
                <input type='text' 
                       name = 'lastName'
                       value = {employee.lastName}
                       onChange={(e) => handleChange(e)}
                       className='h-10 w-96 border-2 rounded  mt-2 px-2 py-2'></input>
            </div>
            <div className=' items-center justify-center h-14 w-full my-6'>
                <label className='block text-grey-600 text-sm font-normal'>
                  Email
                </label>
                <input type='text'
                       name = 'emailId'
                       value = {employee.emailId}
                       onChange={(e) => handleChange(e)}
                       className='h-10 w-96 border-2 rounded mt-2 px-2 py-2'></input>
            </div>
            <div className=' items-center justify-center h-14 w-full my-6 space-x-5 pt-3'>
                <button 
                    onClick={saveEmployee} 
                    className='rounded text-white font-semibold bg-green-500  hover:bg-green-600 py-2 px-6'>
                  Save
                </button>
                <button 
                    onClick = {reset}
                    className='rounded text-white font-semibold bg-red-500  hover:bg-red-600 py-2 px-6'>
                  Clear
                </button>
            </div>


        </div>
    </div>
            
  )
}

export default AddEmployee