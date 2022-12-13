import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const colums = [
  {field:"supplier_id", headerName:"Id",width:50},
  {field:"supplier_name", headerName:"Supplier Name",width:250},
  {field:"company_name", headerName:"Company Name",width:150},
  {field:"supplier_address", headerName:"Supplier Address",width:100},
  {field:"supplier_contact", headerName:"Supplier Contact",width:100},
  {field:"supplier_email", headerName:"Supplier Email",width:100}  
]

const Report = () =>{
  const [data, setData] = useState([]);

  const loadData = useCallback(async()=>{
    const response = await axios.get("http://localhost:4000/supplier/Report");
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
        getRowId = {(row)=>row.supplier_id}
        components={{Toolbar:GridToolbar}}
       />
    </div> 
    );
};

export default Report;