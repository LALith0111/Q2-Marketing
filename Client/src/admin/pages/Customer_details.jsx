import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./admin.css";
import {toast} from "react-toastify";
import axios from "axios";
import "./design.css";
const CustomerDetails = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/api/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    console.log(data);

const deleteContact = (cust_id) => {
        if(window.confirm("Delete?")) {
            axios.delete(`http://localhost:4000/api/remove/${cust_id}`);
            toast.success("Deleted Sucessfully");
            setTimeout(() => loadData(), 500);
        }
    };
  return (<>
    <h1>Customer</h1>
    <div style={{marginTop: "30px"}}>
        <Link to="/addcustomer">
        <button className='btn btn-contact'>Add Customer</button>
        </Link>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    <th style={{textAlign:"center"}}>First Name</th>
                    <th style={{textAlign:"center"}}>Last Name</th>
                    <th style={{textAlign:"center"}}>Phone No</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Address</th>
                    <th style={{textAlign:"center"}}>Password</th>
                    <th style={{textAlign:"center"}}>confirm_Password</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=> {
                    return (
                        <tr keys={item.cust_id}>
                            <th scope="row">{index+1}</th>
                            <td>{item.First_name}</td>
                            <td>{item.Last_name}</td>
                            <td>{item.Phone_no}</td>
                            <td>{item.Email}</td>
                            <td>{item.Address}</td>
                            <td>{item.Password}</td>
                            <td>{item.C_Password}</td>
                            <td>
                                <Link to={`/update/${item.cust_id}`}>
                                <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={() => deleteContact(item.cust_id)}>Delete</button>
                                {/* <Link to={`/view/${item.cust_id}`}>
                                <button className='btn btn-view'>View</button>
                                </Link> */}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
        </>
  );
};
export default CustomerDetails;