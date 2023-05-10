import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';
const Header = () => {

  const useAppstate = useContext(Appstate);

  return (
    <div className='sticky z-10 top-0  header  text-3xl flex justify-between items-center text-red-500 
    font-bold p-3 border bottom-2 border-gray-500'  >
     <Link to={'/'} > <span>Filmy<span className='text-white'>verse</span></span></Link>
   
     { useAppstate.login ? 
   <Link to='/AddMovie'><h1 className='text-lg text-white flex items-center cursor-pointer' >
    <Button><AddIcon className='mr-1' color='secondary' ></AddIcon><span className='text-white'>Add New </span> </Button></h1></Link>
    :
    <Link to='/Login'><h1 className='text-lg bg-green-500 text-white flex items-center cursor-pointer' >
    <Button><span className='text-white font-medium capitalize ' >Login </span> </Button></h1></Link>
   
     }</div>
     
  )
}

export default Header