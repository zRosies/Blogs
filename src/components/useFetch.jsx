import { useEffect, useState } from "react";

const useFetch= (url)=>{
    const [data,setData]= useState(null)
    const [isPending,setIsPending]= useState(true);
    const [error, setError]=useState(null);
   


    useEffect(()=>{
        // console.log('Ranned')
       setTimeout(() => {
        fetch(url).then(res=>{
            if(!res.ok){
                throw Error("Could not fetch the data for that resource");
            }
            return res.json();
           
            
        })
        .then(data=>{
            setData(data)
            setIsPending(false);
        })
        .catch(err=>{
            if(err.name==="AbortError"){
                console.log("FetchAborted")
            }
            setIsPending(false)
            setError(err.message)
        })
        
       }, 300);
    },[url])
    
    return {data, isPending, error}
}

export default useFetch;