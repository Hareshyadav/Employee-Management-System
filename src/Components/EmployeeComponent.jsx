import React, { useEffect, useState } from 'react'
import { addEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeServices';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [department, setDepartment] = useState("");
const [salary, setSalary] = useState(""); 

const navigate = useNavigate();

const {id} =useParams();

useEffect(() => {
    if (id) {
getEmployeeById(id)
.then(response=>{
    console.log(response);
    setName(response.data.name);
    setEmail(response.data.email);
    setDepartment(response.data.department);
    setSalary(response.data.salary);
})
.catch((error) =>{  
    console.log(error);
});
}
}, [id]);

function saveProduct(e) {

    console.log("ee",e.target.value);
    e.preventDefault();
    const employee = { name, email, department, salary };
    console.log(employee);

 if(id){
    updateEmployee(id, employee).then((response)=>{
        console.log(response.data);
        navigator("/all-employees");
    })
    .catch((error)=>{
        console
    });
 }else{


addEmployee(employee).then((response) => {
    console.log(response);
    navigator("/all-employees");

}).catch((error) =>{
console.log(error);

});
 }
}

    return (
        <div className="container">

            <br />
            <br />


            <div className="row">


                <div className="card col-md-6 offset-md-3" >

                    <h2 className="text-center">Employee Details</h2>

                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Employee Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Employee Name"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email</label>
                                <input
                                    type="text"
                                    placeholder="Enter Email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Department</label>
                                <input
                                    type="text"
                                    placeholder="Enter Department"
                                    className="form-control"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                ></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Salary</label>
                                <input
                                    type="text"
                                    placeholder="Enter Salary"
                                    className="form-control"
                                    value={salary}
                                    onChange={(e) => setSalary(e.target.value)}
                                ></input>
                            </div>
                            <button className="btn btn-success" onClick={saveProduct}>
                                Submit
                            </button>

                        </form>


                    </div>
                </div>


            </div>

        </div>
    )
}

export default EmployeeComponent