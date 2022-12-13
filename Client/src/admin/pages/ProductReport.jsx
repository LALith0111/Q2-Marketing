import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const colums = [
  {field:"product_id", headerName:"Id",width:50},
  {field:"product_name", headerName:"Product Name",width:250},
  {field:"product_quantity", headerName:"Quantity",width:100},
  {field:"product_price", headerName:"Price",width:100},
  {field:"offer_price", headerName:"Offer Price",width:100}  
]

const ProductReport = () =>{
  const [data, setData] = useState([]);

  const loadData = useCallback(async()=>{
    const response = await axios.get("http://localhost:4000/products/ProductReport");
    console.log(response.data)
    setData(response.data);
  },[setData])

  useEffect(()=>{
    loadData();
  },[loadData])

  console.log("Data: ");
  console.log(data)
    return (
      <div className="dataTable" style={{height:"600px", padding:"20px"}}>
          <DataGrid 
        rows={data}
        columns={colums}
        getRowId = {(row)=>row.product_id}
        components={{Toolbar:GridToolbar}}
       />
    </div> 
    );
};

export default ProductReport;