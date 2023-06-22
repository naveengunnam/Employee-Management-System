import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ( {employee, deleteEmployee}) => {
    const navigate = useNavigate(); 
    const editEmployee = (e,id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`); 
    };
    
  return (
    <tr key = {employee.id}>
        <td className='text-left whitespace-nowrap px-6 py-3 '>
            <div className='text-sm from-neutral-300'>{employee.firstName}</div>
        </td>
        <td className='text-left whitespace-nowrap px-6 py-3 '>
            <div className='text-sm from-neutral-300'>{employee.lastName}</div>
        </td>
        <td className='text-left whitespace-nowrap px-6 py-3 '>
            <div className='text-sm from-neutral-300'>{employee.emailId}</div>
        </td>
        <td className='text-right whitespace-nowrap px-6 py-3   '>
            <a
                onClick={(e,id) => editEmployee(e,employee.id)}
                className='  text-white bg-green-500 rounded  hover: cursor-pointer hover:bg-green-600 shadow border-b py-1 px-6 mx-1'>
                    Edit  
            </a>
            <a
                onClick={(e,id) => deleteEmployee(e,employee.id)}
                className=' text-white bg-red-400 rounded hover:cursor-pointer  hover:bg-red-500 shadow border-b py-1 px-4 mx-1'>
                    Delete
            </a>
        </td>
    </tr> 
  );
}

export default Employee