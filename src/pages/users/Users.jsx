import './users.scss'
import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {userRows} from '../../data/fakeData'
import TitleWithCreateBtn from '../../components/TitleWithCreateBtn/TitleWithCreateBtn'
import ButtonsAction from '../../components/ButtonsAction/ButtonsAction';


const Users = () => {
  const [rows, setRows]=useState(userRows)  
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 200, renderCell:(params)=>{
      return (      
        <div className="usernameField">
          <img src={params.row.avatar} alt="" />
          <span>{params.row.userName}</span>
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 150 },
    {
      field: 'status',
      headerName: 'Status',    
      width: 220,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,    
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,    
      renderCell: (params)=>{
        return <ButtonsAction  rows={rows} 
                          setRows={setRows} 
                          link="/user/edit/" 
                          id={params.row.id}                             
          />                  
      }
    },
  ];

  return (
    <div className="users">    
      <div className="userHeader">
        <TitleWithCreateBtn title="users" btnTitle="Create" link="/user/create"/>                         
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        disableSelectionOnclick
        rowsPerPageOptions={[5]}
        checkboxSelection
      />    
    </div>
  )
}

export default Users