import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CustomerDetails from './pages/Customer_details.jsx';
import Addcustomer from './pages/addcustomer.jsx';
import SupplierDetails from './pages/Supplier_details.jsx';
import Addsupplier from './pages/addsupplier.jsx';
import AddProducts from './pages/AddProducts.jsx';
import ProductList from './pages/ProductList.jsx';
import Comment from './pages/Comment.jsx';
import Report from './pages/Report.jsx';
import Customerreport from './pages/Customerreport.jsx';
import ProductReport from './pages/ProductReport.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer_details" element={<CustomerDetails />} />
          <Route path="/addcustomer" element={<Addcustomer />} />
          <Route path="/update/:cust_id" element={<Addcustomer />} />

          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/AddProducts" element={<AddProducts/>} />
          <Route path="/productupdate/:product_id" element={<AddProducts/>} />

          <Route path="/addsupplier" element={<Addsupplier />} />
          <Route path="/SupplierDetails" element={<SupplierDetails />} />
          <Route path="/supplierupdate/:supplier_id" element={<Addsupplier/>}/>
          <Route path="/comment" element={<Comment />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/Customerreport" element={<Customerreport />} />
          <Route path="/ProductReport" element={<ProductReport />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;