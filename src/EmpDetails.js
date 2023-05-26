import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpDetails=()=>{
    const [data,setData]=useState(null);
    useEffect(()=>{
        fetch("http://localhost:8000/employee").then((res)=>{
            return res.json();
        }).then((resp)=>{
            setData(resp)
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])
    const nav=useNavigate("");
    const LoadDetail=(id)=>{
        nav("/employee/info/"+id)
    }
    const LoadEdit=(id)=>{
        nav("/employee/edit/"+id)
    }
    const LoadDelete=(id)=>{
        if(window.confirm("Do you want to delete?")){
            fetch("http://localhost:8000/employee/"+id,{
            method:"DELETE",
        })
        .then((res)=>{
            alert("Deleted successfully....")
            window.location.reload();

        }).catch((err)=>{
            console.log(err.message);
        })
        }
    }
    return(
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee details</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success"> Add new employee </Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>EmpID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Work</td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {data&&
                                data.map(item=>(
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <a onClick={()=>{LoadEdit(item.id)}} className="btn btn-success">Edit</a>
                                            <a onClick={()=>{LoadDelete(item.id)}} className="btn btn-danger">Remove</a>
                                            <a onClick={()=>{LoadDetail(item.id)}} className="btn btn-primary">Details</a>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default EmpDetails;