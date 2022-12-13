import React ,{useState,useEffect}from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import './admin.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
    First_name:"",
    Last_name:"",
    Phone_no:"",
    Email:"",
    Address:"",
    Password:"",
    C_Password:"",

}

const Addcustomer = () => {
  const[state,setState] = useState(initialState)

  const{First_name,Last_name,Phone_no,Email,Address,Password,C_Password} = state;
  
  const navigator = useNavigate();

  const {cust_id} = useParams();

  useEffect(() =>{
    axios
    .get(`http://localhost:4000/api/get/${cust_id}`)
    .then((resp) => setState({...resp.data[0]}));
  },[cust_id])  

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(C_Password+" "+Password)
    if(!First_name || !Last_name || !Phone_no || !Email || !Address || !Password || !C_Password)
        toast.error("Please provide value in input field");
    else if(Password!==C_Password)
            toast.error("Password did not match", {position:toast.POSITION.TOP_CENTER});
    else{
        if(!cust_id){
            axios.post("http://localhost:4000/api/post",{
                First_name,
                Last_name,
                Phone_no,
                Email,
                Address,
                Password,
                C_Password
            }).then(()=>{
                setState({First_name:"",Last_name:"",Phone_no:"",Email:"",Address:"",Password:"",C_Password:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Customer Added Successfully", {position:toast.POSITION.TOP_CENTER});
                  
        }
        else{
            axios.put(`http://localhost:4000/api/update/${cust_id}`,{
                First_name,
                Last_name,
                Phone_no,
                Email,
                Address,
                Password,
                C_Password,
            }).then(()=>{
                setState({First_name:"",Last_name:"",Phone_no:"",Email:"",Address:"",Password:"",C_Password:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Customer Updated Successfully", {position:toast.POSITION.TOP_CENTER});
        }
        setTimeout(() => navigator("/Customer_details"), 500);
    }
  }  

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({...state,[name] :value})
  }

  return (
    <>
    <h1>ADD CUSTOMER</h1>
    <div style={{marginTop: '100px'}}>
        <form style={{
            margin:'auto',
            padding:'15px',
            maxWidth:'400px',
            alignContent:'center'
        }}
        onSubmit={handleSubmit}
        >
            <label htmlFor='name'>First Name</label>
            <input
                type='text'
                id = 'First_name'
                name='First_name' 
                placeholder='Enter First Name...'
                value={First_name||""}
                onChange={handleInputChange}
            />
            <label htmlFor='name'>Last Name</label>
            <input
                type='text'
                id = 'Last_name'
                name='Last_name' 
                placeholder='Enter Last Name...'
                value={Last_name||""}
                onChange={handleInputChange}
            />
            <label htmlFor='Phone_No'>Contact</label>
            <input
                type="number"
                id = 'Phone_no'
                name='Phone_no' 
                placeholder='Enter mobile no...'
                value={Phone_no||""}
                onChange={handleInputChange}
            />
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                id = 'Email'
                name='Email' 
                placeholder='Enter Email...'
                value={Email||""}
                onChange={handleInputChange}
            />
            <label htmlFor='Address'>Address</label>
            <input
                type='text'
                id = 'Address'
                name='Address' 
                placeholder='Enter Address...'
                value={Address||""}
                onChange={handleInputChange}
            />
             <label htmlFor='password'>Password</label>
            <input
                type='password'
                id = 'Pasword'
                name='Password' 
                value={Password||""}
                onChange={handleInputChange}
            />
             <label htmlFor='cpassword'>Confirm Password</label>
            <input
                type='password'
                id = 'C_Pasword'
                name='C_Password' 
                value={C_Password||""}
                onChange={handleInputChange}
            />
            <input type='submit' value={cust_id?"Update":"Save"}/>
            <Link to='/'>
                <input type='button' value='Go Back' />
            </Link>
        </form>
    </div>
    </>
  )
}

export default Addcustomer;