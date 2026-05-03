import React,{useState, useEffect} from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeServices';
import { useNavigate } from 'react-router-dom';
const ListEmployeeComponent = () => {

    // const dummyData = [
    //     {
    //         id: 1,
    //         accountHolderName: "Haresh Yadav",
    //         accountNumber: "7718922828",
    //         balance: 1000000,
    //     },
    //     {
    //         id: 2,
    //         accountHolderName: "AAshu Yadav",
    //         accountNumber: "7718922828",
    //         balance: 1000000,      
    //     },
    //     {
    //         id: 3,
    //         accountHolderName: "Rohan Yadav",
    //         accountNumber: "7718922828",
    //         balance: 1000000,
    //     }
    // ]

    const navigator = useNavigate();

    const [Employees, setEmployees] = useState([]);
    useEffect(() => {
        getAllEmployees();
    }, []);
    function getAllEmployees() {
        listEmployees().then((response) => {
            console.log(response);
            setEmployees(response.data);

        }).catch((error) => {
            console.log(error);
        })
    }

    function addNewEmployee() {
        console.log("Add Employee");
        navigator("/add-employee");
    }+

    function updateProduct(id) {
        navigator(`/update-employee/${id}`);
    }

    function deleteProduct(id) {
        console.log("Delete Employee", id);
        deleteEmployee(id).then((response) => {
            console.log(response);
            getAllEmployees();
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        
    <div className="container">
        <h2 className="text-center">List Employees</h2>
        <button className="btn btn-primary" onClick={addNewEmployee}>Add Employee</button>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {   Employees.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.department}</td>
                        <td>{item.salary}</td>  
                        <th className="d-flex gap-2">
                        <button className="btn btn-warning" onClick={()=>updateProduct(item.id)}>Update</button>
                        <button className="btn btn-danger" onClick={()=>deleteProduct(item.id)}>Delete</button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default ListEmployeeComponent