import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios_APICalling = () => { 

  const [data,setData]= useState([])
    const getData = async()=>{ 
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
        setData(response.data)
        console.log(data)
    }

    useEffect(()=>{
      getData()
    },[])

  return (
   
  <>
    <div className='p-10'>
        <button onClick={getData} className='active:scale-90 text-white bg-blue-950 w-30 h-20 p-4 m-4 rounded-2xl action'>
            Get Data
        </button>
        <div className='p-5 mt-5 text-white bg-gray-950'>
           {data.map(function(elem,idx){
            return <div key={idx} className='bg-gray-50 text-black items-center flex justify-between w-full px-7 py-6 rounded mb-3'>
                    <img className='h-50 w-60' src={elem.download_url} alt="" />
                    <h1>Name= {elem.author} , user id={elem.id}</h1> 
                                     
            </div>
           })}
        </div>
    </div>
  </>
  )
}

export default Axios_APICalling
