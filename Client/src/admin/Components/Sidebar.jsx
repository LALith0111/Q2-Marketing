import React, { useState } from 'react';
import {
    FaBars,
    FaCommentAlt,
    FaShoppingBag,
    FaUserTie,
    FaUserPlus,
    FaRegUser,
    FaUtensils,
    FaClipboardList,
    
}from "react-icons/fa";
import { BiCategory
 } from "react-icons/bi";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
       {
            path:"/Customer_details",
            name:"Customers",
            icon:<FaRegUser/>
        },
        {
            path:"/addcustomer",
            name:"Add Customer",
            icon:<FaUserPlus/>
        },
        {
            path:"/SupplierDetails",
            name:"Suppliers",
            icon:<FaRegUser/>
        },
        {
            path:"/addsupplier",
            name:"Add Supplier",
            icon:<FaUserPlus/>
        },
        {
            path:"/ProductList",
            name:"Products",
            icon:<FaUtensils/>
        },
        {
            path:"/AddProducts",
            name:"Add Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Report",
            name:" Supplier Report",
            icon:<FaClipboardList/>
        },
        {
            path:"/Customerreport",
            name:" Customer Report",
            icon:<FaClipboardList/>
        },
        {
            path:"/ProductReport",
            name:" Product Report",
            icon:<FaClipboardList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "500px" : "80px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Q2 Marketing</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "50px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;