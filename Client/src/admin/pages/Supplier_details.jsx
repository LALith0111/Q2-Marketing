import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./admin.css";
import {toast} from "react-toastify";
import axios from "axios";
import "./design.css";
const SupplierDetails = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/supplier/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    console.log(data);

const deleteContact = (supplier_id) => {
        if(window.confirm("Delete?")) {
            axios.delete(`http://localhost:4000/supplier/remove/${supplier_id}`);
            toast.success("Deleted Sucessfully");
            setTimeout(() => loadData(), 500);
        }
    };
  return (<>
    <h1>Supplier</h1>
    <div style={{marginTop: "30px"}}>
        <Link to="/addsupplier">
        <button className='btn btn-contact'>Add Supplier</button>
        </Link>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    <th style={{textAlign:"center"}}>Supplier Name</th>
                    <th style={{textAlign:"center"}}>Company Name</th>
                    <th style={{textAlign:"center"}}>Address</th>
                    <th style={{textAlign:"center"}}>Contact</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Password</th>
                    <th style={{textAlign:"center"}}>Confirm_Password</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=> {
                    return (
                        <tr keys={item.supplier_id}>
                            <th scope="row">{index+1}</th>
                            <td>{item.supplier_name}</td>
                            <td>{item.company_name}</td>
                            <td>{item.supplier_address}</td>
                            <td>{item.supplier_contact}</td>
                            <td>{item.supplier_email}</td>
                            <td>{item.supplier_password}</td>
                            <td>{item.supplier_cpassword}</td>
                            <td>
                                <Link to={`/supplierupdate/${item.supplier_id}`}>
                                <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={() => deleteContact(item.supplier_id)}>Delete</button>
                                {/* <Link to={`/view/${item.supplier_id}`}>
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
export default SupplierDetails;