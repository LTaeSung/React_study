import React, {useState, useEffect} from "react";
import axios from "axios";

const Customer = ()=> {
    const [data, setData] = useState(null);
    const allCustomer = () => {
        axios.get('http://localhost:8090/test/api/customer/all').then(res=> {
          console.log(res['data']);
          setData(res.data);
        });
    }
    useEffect(()=>{
        allCustomer();
    },[]);
    return (
        <>
        <ul>
            {data && data.map((c, i)=> <li key={c['id']}> {c['CUSTOMER_NAME']}</li>)}
        </ul>
        </>
    )
}
export default Customer;