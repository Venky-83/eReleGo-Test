import { useState } from "react";
import { Link } from "react-router-dom";
import Display from "./Display";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Add=()=>{
    let[userName,setEname]=useState("");
    let[mailId,setEmail]=useState("");
    let[designation, setDesignation]=useState("");
    let[status, setStatus]=useState("");
    const history= useHistory()
    const handleSubmit=(e)=>{
        e.preventDefault();
        let newEmp = {userName,mailId,designation,status};
        fetch("http://localhost:3500/datas",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newEmp)})
        .then(()=>{
            alert("detail added successfully");
            history.push("/")
        })
    }
    return (
        <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="">NAME :</label> <input type="text" placeholder="Enter Name" onChange={(e)=>{setEname(e.target.value)}} /> <br />
        <label htmlFor="">EMAIL ID :</label> <input type="email" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}} /> <br />
        <label htmlFor="">DESIGNATION :</label> <input type="text" placeholder="Enter Designation" onChange={(e)=>{setDesignation(e.target.value)}}  /><br />
        <label htmlFor="">STATUS :</label> <input type="text" placeholder="Enter Status" onChange={(e)=>{setStatus(e.target.value)}} /><br />
        <center>
        <input id="sub" type="submit" value="submit" />
        </center>
    </form>
    )
}

export default Add;

