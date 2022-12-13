import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./admin.css";
import {toast} from "react-toastify";
import axios from "axios";
import "./design.css";

const ProductList = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/product/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    console.log(data);

const deleteContact = ((product_id) => {
        if(window.confirm("Delete?")) {
            axios.delete(`http://localhost:4000/product/remove/${product_id}`);
            toast.success("Deleted Sucessfully");
            setTimeout(() => loadData(), 500);
        }
    });
    return (<>
        <h1>Product</h1>
        <div style={{marginTop: "30px"}}>
            <Link to="/AddProducts">
            <button className='btn btn-contact'>Add Products</button>
            </Link>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>No.</th>
                        <th style={{textAlign:"center"}}>Product Name</th>
                        <th style={{textAlign:"center"}}>Product Description</th>
                        <th style={{textAlign:"center"}}>Product Quantity</th>
                        <th style={{textAlign:"center"}}>Product price</th>
                        {/* <th style={{textAlign:"center"}}>Product Image</th> */}
                        <th style={{textAlign:"center"}}>Product Offer price</th>
                        <th style={{textAlign:"center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=> {
                        return (
                            <tr keys={item.product_id}>
                                <th scope="row">{index+1}</th>
                                <td>{item.product_name}</td>
                                <td>{item.product_description}</td>
                                <td>{item.product_quantity}</td>
                                <td>{item.product_price}</td>
                                {/* <td><img src={require(`./images/${item.product_image}`)} alt={item.product_image} width={50} height={50}/></td> */}
                                <td>{item.offer_price}</td>
                                <td>
                                    <Link to={`/productupdate/${item.product_id}`}>
                                    <button className='btn btn-edit'>Edit</button>
                                    </Link>
                                    <button className='btn btn-delete' onClick={() => deleteContact(item.product_id)}>Delete</button>
                                    
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
            </div>
            </>
      )
};
  


export default ProductList;