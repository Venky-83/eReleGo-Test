import { useEffect, useState } from "react";

const useFetch = (request) => {
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    useEffect (()=>{
                    setTimeout(()=>{
                                    fetch(request)
                                    .then((res)=>{
                                            if(res.ok===false)
                                                {
                                                    throw Error("Data not found, please try fot thre different data");
                                                }
                                        return res.json()})
                                    .then((recevedData)=>{setData(recevedData);})
                                    .catch((error)=>{setError(error.message);})
                                    },50)
                    } ,[data])
                                
                    return(
                        {data,error}
                    );                               
}

export default useFetch;