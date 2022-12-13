import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const colums = [
  {field:"cust_id", headerName:"Id",width:50},
  {field:"First_name", headerName:"First Name",width:250},
  {field:"Last_name", headerName:"Last Name",width:150},
  {field:"Phone_no", headerName:"Phone No",width:100},
  {field:"Email", headerName:"Email",width:100},
  {field:"Address", headerName:"Customer Address",width:100}  
]

const Customerreport = () =>{
  const [data, setData] = useState([]);

  const loadData = useCallback(async()=>{
    const response = await axios.get("http://localhost:4000/customers/Customerreport");
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
        getRowId = {(row)=>row.cust_id}
        components={{Toolbar:GridToolbar}}
       />
    </div> 
    );
};

export default Customerreport;