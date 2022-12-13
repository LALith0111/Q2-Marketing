import React ,{useState,useEffect, useCallback}from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import './admin.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
    product_name:"",
    product_description:"",
    product_quantity:"",
    product_price:"",
    offer_price:"",
}

const Add_products = () => {
    const[state,setState] = useState(initialState)

  const{product_name, product_description, product_quantity, product_price, offer_price} = state;
  
  const navigator = useNavigate();

  const {product_id} = useParams();
  
  const loadData = useCallback(async()=>{
    const response = await axios.get(`http://localhost:4000/product/get/${product_id}`);
    setState(response.data);
  },[product_id])

  const [picture,setPicture] = useState([]);
  useEffect(() =>{
    loadData();
  },[loadData])  

  const handleImage = (e) =>{
    console.log(e.target.files[0])
    setPicture({ images: e.target.files[0].name})
  }

  console.log(state);


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!product_name || !product_description || !product_quantity || !product_price ||  !offer_price)
        toast.error("Please provide value in input field");
    else{
        if(!product_id){
            axios.post("http://localhost:4000/product/post",{
                product_name,
                product_description,
                product_quantity,
                product_price,
                offer_price,
                picture
            }).then(()=>{
                setState({product_name:"",product_description:"",product_quantity:"",product_price:"",product_image:"",offer_price:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Customer Added Successfully", {position:toast.POSITION.TOP_CENTER});
                  
        }
        else{
            axios.put(`http://localhost:4000/product/productupdate/${product_id}`,{
                product_name,
                product_description,
                product_quantity,
                product_price,
                offer_price,
                picture
            }).then(()=>{
                setState({product_name:"",product_description:"",product_quantity:"",product_price:"",product_image:"",offer_price:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Custmer Updated Successfully", {position:toast.POSITION.TOP_CENTER});
        }
        setTimeout(() => navigator("/ProductList"), 500);
    }
  }  

  console.log(picture);

  const handleInputChange = (e) =>{
    console.log(e)
    const {name, value} = e.target;
    setState({...state,[name] :value})
  }
    return (
        <>
        <h1>ADD PRODUCTS</h1>
        <div style={{marginTop: '10px'}}>
            <form style={{
                margin:'auto',
                padding:'15px',
                maxWidth:'400px',
                alignContent:'center'
            }}
            onSubmit={handleSubmit}
            >
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id = 'product_name'
                    name='product_name' 
                    placeholder='Enter product Name...'
                    value={product_name||""}
                    onChange={handleInputChange}
                />
                <label htmlFor='description'>Description</label>
                <input
                    type='text'
                    id = 'product_description'
                    name='product_description' 
                    placeholder='Enter product description...'
                    value={product_description||""}
                    onChange={handleInputChange}
                />
                <label htmlFor='quantity'>Product Quantity</label>
                <input
                    type="number"
                    id = 'product_quantity'
                    name='product_quantity' 
                    placeholder='Enter quantity no...'
                    value={product_quantity||""}
                    onChange={handleInputChange}
                />
                <label htmlFor='price'>Product price</label>
                <input
                    type='text'
                    id = 'product_price'
                    name='product_price' 
                    placeholder='Enter Price...'
                    value={product_price||""}
                    onChange={handleInputChange}
                />
                 <label htmlFor='image'>Product Image</label>
                <input
                    type='file'
                    id = 'product_image'
                    name='product_image' 
                    
                    onChange={handleImage}
                />
                <br></br>
                <br></br>
                 <label htmlFor='offer_price'>Offer price</label>
                <input
                    type='text'
                    id = 'offer_price'
                    name='offer_price' 
                    placeholder='Enter the sales Price...'
                    value={offer_price||""}
                    onChange={handleInputChange}
                />
                <input type='submit' value={product_id?"Update":"Save"}/>
                <Link to='/'>
                    <input type='button' value='Go Back' />
                </Link>
            </form>
        </div>
        </>
      )
    }
export default Add_products;