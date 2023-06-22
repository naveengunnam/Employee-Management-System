import React, { useEffect ,  useState  } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';



    const UpdateEmployee = () => {
        const navigate = useNavigate()
        const {id} = useParams();
        const [employee,setEmployee] = useState({
            id : id,
            firstName : "",
            lastName : "",
            emailId : "",
    });
    

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee , [e.target.name]: value})
      };
    
    useEffect( () => {
        const fetchData = async () => {
            // setLoading(true);
            try{
                const response = await EmployeeService.getEmployeeById(id);
                setEmployee(response.data);
            }catch(error){
                console.log(error);
            }
            // setLoading(false);
        };
        fetchData();
    },[] );

    const updateEmployee = (e) => {
        e.preventDefault();
        console.log(employee);
        EmployeeService.updateEmployee(employee, id)
          .then((response) => {
            console.log(response)
            navigate("/employeeList");
          })
          .catch((error) => {
            console.log(error);
          });
    };

  return (
    <div className="flex max-w-xl mx-auto shadow bottom-b rounded bg-gray-100 content-center">
        <div  className='px-6 py-6 mx-auto '>
            <div className='font-thin text-2xl  tracking-wider'>
                <h1>Edit Employee</h1>
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
                    onClick={updateEmployee} 
                    className='rounded text-white font-semibold bg-green-500  hover:bg-green-600 py-2 px-6'>
                  Update
                </button>
                <button 
                    onClick = {() => navigate("/employeeList")}
                    className='rounded text-white font-semibold bg-red-500  hover:bg-red-600 py-2 px-6'>
                  Cancel
                </button>
            </div>


        </div>
    </div>
  )
}

export default UpdateEmployee