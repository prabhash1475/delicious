import { useEffect, useState } from "react";
import axios from "axios"


const useFetch = (url)=>{

    const [data,setData] = useState([]);
    const [loading, setLoading ] = useState(false);
    const [error,setError] = useState(false);

    const fetchData=()=>
    {
        setLoading(true);
        axios
        .get(url).then(r=>{
            setLoading(false);
            setData(r.data)
        }).catch(e=>{
            setError(true);
            setLoading(false);
        })
    }

    useEffect(() => {
     fetchData()
    },[])

    return [data,loading,error]
    

}

export default useFetch;