import React, { useEffect, useState } from "react";
import axios from "axios";

function Show(){
    const [data,setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get(import.meta.env.VITE_URLGET);
            setData(response.data);
        }
        fetchData();
    },[])
    return(<>
    {
        (data.length === 0)?
         <h3 style={{textAlign: "center"}}>there is no data</h3>
       : data.map((item, index) =>{
            return <div key={index} style={{textAlign:"center"}}>
            <h3>{item.name}</h3>
            <h3>{item.description}</h3>
            <h3>{item.age}</h3>
            <br />
            </div>
        })
    }
    </>);
}
export default Show