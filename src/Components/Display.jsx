import useFetch from "./UseFetch";
import { Link } from "react-router-dom";
import Add from "./Add";
import { useState } from "react";




const Display  = () => {
    let{data:datas,pending,error}=useFetch("http://localhost:3500/datas")
    const [searchTerm,setsearchTerm]=useState("");
    return ( 
        <div className="emp-list">
            <h1 align="center">List of all the Employes</h1>
            <input type="text" id="search" placeholder="search..." onChange={(e)=>{setsearchTerm(e.target.value)}} />

            {datas && 
                <table id="tab" border="2px">
		    <thead>
                        <tr>
                            <th>SL_NO</th>   
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>DESIGNATION</th>
                            <th>STATUS</th>
                         </tr>
                         

                    </thead>
                        <tbody>
                            {datas.filter(val=>{
                                if (searchTerm=== "")
                                {
                                    return val;
                                } else if(
                                    val.userName.toLowerCase().includes(searchTerm.toLowerCase())||
                                    val.mailId.toLowerCase().includes(searchTerm.toLowerCase())||
                                    val.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    val.status.toLowerCase().includes(searchTerm.toLowerCase()) )
                                        {
                                            return val;
                                        }
                                    
                                
                            }).map((data,i)=>(
                                <tr>
                                    <td align="center">{i+1}</td>
                                    <td>{data.userName}</td>
                                    <td>{data.mailId}</td>
                                    <td>{data.designation}</td>
                                    <td>{data.status}</td>  
                                </tr>
                            ))}
                        </tbody>
                </table>
                }
		<br/>
 	    	<center>
		    <Link to={"/Add"}><button id="btn">ADD</button></Link>
		</center>
        </div>
     );
}

export default Display;