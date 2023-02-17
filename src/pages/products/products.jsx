import './products.scss'
import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {productRows} from '../../data/fakeData'
import TitleWithCreateBtn from '../../components/TitleWithCreateBtn/TitleWithCreateBtn';
import ButtonsAction from '../../components/ButtonsAction/ButtonsAction';


const Products=()=>{
  const [rows, setRows]=useState(productRows)
  

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'price', headerName: 'Price', width: 160 },
    {
      field: 'image',
      headerName: 'Image',
      width: 160,
      renderCell:(params=>{
        return <img className="imageField" src={params.row.image} alt=""/>
      })
    },
    {
      field: 'actions',
      headerName: 'Actions',        
      width: 160,    
      renderCell:(params=>{
        return (
          <ButtonsAction  rows={rows} 
                          setRows={setRows} 
                          link="/product/edit/" 
                          id={params.row.id}                             
          />             
        )
      })
    }
  ]
  
  return (    
    <div className="products">
      <TitleWithCreateBtn title="Products" btnTitle="Create" link="/product/create"  />
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>      
  )
}


export default Products