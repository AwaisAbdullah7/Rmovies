import React, { useEffect, useState } from 'react';
import {Audio,ThreeDots} from 'react-loader-spinner';
import { getDocs } from 'firebase/firestore';
import { moviesRef } from './firebase/firebase';
import ReactStars from 'react-stars';
import {Link } from 'react-router-dom';
const Cards = () => {

const[data,setdata]=useState([]);
const[loading,setLoading]=useState([true]);
useEffect(()=>{

async function getData(){

setLoading(true);
const _data=await getDocs(moviesRef);
_data.forEach((doc)=> {

  setdata((prv)=> [...prv, {...(doc.data()),id: doc.id}])
})
setLoading (false);
}
getData();
  
},[])

  return (

     <div className='flex flex-wrap justify-between p-1 mt-2'>
      { loading ? <div className='w-full flex justify-center items-center h-96'> <ThreeDots height={40} color='white'/></div> :
      data.map((e,i) => {
      return (
       
        < Link to = {`/Details/${e.id}`}> <div key={i}  className='card shadow-lg p-2 hover:-translate-y-3 cursor-pointer  mt-6 transition-all duration-500  font-medium' >
        
        <img className='h-72 w-72' src={e.image} alt='No Photosfound'></img>
        <h1>{e.title}</h1>
        <h1> <span className='text-gray-500'> Ratings:</span> <ReactStars  className='inline-block' size={10} edit={false} half={true} value={e.rating/e.rated}  /></h1>
        <h1><span className='text-gray-500'>Year: </span> {e.year}</h1>
        </div>
        </Link> 
        );})}
      

      
  
  
    </div>
    
  );
  };
 
export default Cards;