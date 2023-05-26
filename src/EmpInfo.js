import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const EmpInfo=()=>{
    const {empid}=useParams();
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empid).then((res)=>{
            return res.json();
        }).then((resp)=>{
            setData(resp)
            console.log("hello "+data.name)
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])

    return(
        <div>
            <div className="card" style={{"textALign":"left"}}>
                <div className="card-title">
                    <h2>Employee details</h2>
                </div>
                <div className="card-body"></div>
            {data &&
            <div>
            <h2>The employee name is:{data.name}</h2>
            <h3>Contact Details</h3>
            <h5>Email id:{data.email}</h5>
            <h5>Phone:{data.phone}</h5>
            <Link className="btn btn-success" to="/">Home page</Link>
            </div>
            }
            </div>
        </div>
    )
}

export default EmpInfo