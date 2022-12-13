import React ,{useState,useEffect}from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import './admin.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
    supplier_name:"",
    company_name:"",
    supplier_address:"",
    supplier_contact:"",
    supplier_email:"",
    supplier_password:"",
    supplier_cpassword:"",

}

const Addsupplier = () => {
  const[state,setState] = useState(initialState)

  const{supplier_name,company_name,supplier_address,supplier_contact,supplier_email,supplier_password,supplier_cpassword} = state;
  
  const navigator = useNavigate();

  const {supplier_id} = useParams();

  useEffect(() =>{
    axios
    .get(`http://localhost:4000/supplier/get/${supplier_id}`)
    .then((resp) => setState({...resp.data[0]}));
  },[supplier_id])  

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(supplier_cpassword+" "+supplier_password)
    if(!supplier_name || !company_name || !supplier_address || !supplier_contact || !supplier_email || !supplier_password || !supplier_cpassword)
        toast.error("Please provide value in input field");
    else if(supplier_password!==supplier_cpassword)
            toast.error("Password did not match", {position:toast.POSITION.TOP_CENTER});
    else{
        if(!supplier_id){
            console.log("Post")
            axios.post("http://localhost:4000/supplier/post",{
                supplier_name,
                company_name,
                supplier_address,
                supplier_contact,
                supplier_email,
                supplier_password,
                supplier_cpassword
            }).then(()=>{
                setState({supplier_name:"",company_name:"",supplier_address:"",supplier_contact:"",supplier_email:"",supplier_password:"",supplier_cpassword:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Customer Added Successfully", {position:toast.POSITION.TOP_CENTER});
                  
        }
        else{
            console.log("put method");
            axios.put(`http://localhost:4000/supplier/update/${supplier_id}`,{
                supplier_name,
                company_name,
                supplier_address,
                supplier_contact,
                supplier_email,
                supplier_password,
                supplier_cpassword,
            }).then(()=>{
                setState({supplier_name:"",company_name:"",supplier_address:"",supplier_contact:"",supplier_email:"",supplier_password:"",supplier_cpassword:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Supplier Updated Successfully", {position:toast.POSITION.TOP_CENTER});
        }
        setTimeout(() => navigator("/SupplierDetails"), 500);
    }
  }  

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({...state,[name] :value})
  }

  return (
    <>
    <h1>ADD SUPPLIER</h1>
    <div style={{marginTop: '100px'}}>
        <form style={{
            margin:'auto',
            padding:'15px',
            maxWidth:'400px',
            alignContent:'center'
        }}
        onSubmit={handleSubmit}
        >
            <label htmlFor='name'>Supplier Name</label>
            <input
                type='text'
                id = 'supplier_name'
                name='supplier_name' 
                placeholder='Enter Supplier Name...'
                value={supplier_name||""}
                onChange={handleInputChange}
            />
            <label htmlFor='name'>Company Name</label>
            <input
                type='text'
                id = 'company_name'
                name='company_name' 
                placeholder='Enter Company Name...'
                value={company_name||""}
                onChange={handleInputChange}
            />
            <label htmlFor='Phone_No'>Contact</label>
            <input
                type="number"
                id = 'supplier_contact'
                name='supplier_contact' 
                placeholder='Enter mobile no...'
                value={supplier_contact||""}
                onChange={handleInputChange}
            />
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                id = 'supplier_email'
                name='supplier_email' 
                placeholder='Enter Email...'
                value={supplier_email||""}
                onChange={handleInputChange}
            />
            <label htmlFor='Address'>Address</label>
            <input
                type='text'
                id = 'supplier_address'
                name='supplier_address' 
                placeholder='Enter Address...'
                value={supplier_address||""}
                onChange={handleInputChange}
            />
             <label htmlFor='password'>Password</label>
            <input
                type='password'
                id = 'supplier_pasword'
                name='supplier_password' 
                value={supplier_password||""}
                onChange={handleInputChange}
            />
             <label htmlFor='cpassword'>Confirm Password</label>
            <input
                type='password'
                id = 'supplier_cpasword'
                name='supplier_cpassword' 
                value={supplier_cpassword||""}
                onChange={handleInputChange}
            />
            <input type='submit' value={supplier_id?"Update":"Save"}/>
            <Link to='/'>
                <input type='button' value='Go Back' />
            </Link>
        </form>
    </div>
    </>
  )
}

export default Addsupplier;