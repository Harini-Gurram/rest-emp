import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const EmpCreate=()=>{
    const [id,changeid]=useState("");
    const [name,changename]=useState("");
    const [email,changeemail]=useState("");
    const [phone,changephn]=useState("");
    const [active,changeactive]=useState(true);
    const [validation,valChange]=useState(false);

    const nav=useNavigate("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        //console.log({id,name,email,phone,active})
        const empData={name,email,phone,active};
        
        fetch("http://localhost:8000/employee",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empData)
        })
        .then((res)=>{
            alert("Saved successfully....")
            nav("/");

        }).catch((err)=>{
            console.log(err.message);
        })
    }

    return(
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Create employee</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-cntrol"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e=>valChange(true)} onChange={e=>changename(e.target.value)} className="form-cntrol"></input>
                                            {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email </label>
                                            <input value={email} onChange={e=>changeemail(e.target.value)}className="form-cntrol"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} onChange={e=>changephn(e.target.value)}className="form-cntrol"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input type={"checkbox"} className="form-check-input"></input>
                                            <label checked={active} onChange={e=>changeactive(e.target.checked)} className="form-check-label">Is active</label>
                                        </div>
                                    </div>
                                    <div className="col-lh-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmpCreate