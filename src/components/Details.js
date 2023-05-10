import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { Await, useParams } from 'react-router-dom'
import { db } from './firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import {Bars, bars} from 'react-loader-spinner'
import { ThreeCircles } from 'react-loader-spinner'
import { WindowSharp } from '@mui/icons-material'
import Reviews from './Reviews';




const Details = () => {

const {id}=useParams();
    const[data, setData]=useState({
        Description:"",
        
Year:"",
        
image:"",
Title:"",
rating:0,
rated:0

    });

const [loading,setLoading]= useState(false);

useEffect(() => {
    
async function getData() {
    setLoading(true);
    const _doc =doc(db,"Movies", id);
    const _data = await getDoc(_doc);
    setData(_data.data());
    
setLoading(false);

}
getData();
},[])





  return (

    <div className='p-4 mt-4  flex-col md:flex-row items-center md:items-start flex justify-center'>
    { loading ? <div className='h-96 flex w-full justify-center items-center'> <ThreeCircles height={30} color='white' /> </div> :
    <>  
    

      <img className='h-96 block md:sticky top-24' src = {data.image} Alt="No Photosfound"   />
      <div className='md:ml-4 ml-0 w-full md:w-1/2'>
      <h1 className='text-3xl font-bold text-gray-400 '>{data.Title} <span className='text-xl' >{data.Year}</span></h1>
   <ReactStars>
      size={20}
      half={true}
      value={data.rating/data.rated}
      
      edit={false}
   </ReactStars>

      <p className='mt-3' >
{data.Description}
      </p>
      <Reviews id={id} prevRating ={data.rating} userRated ={data.rated} />
      </div>
</>}  </div>
  )
}

export default Details
