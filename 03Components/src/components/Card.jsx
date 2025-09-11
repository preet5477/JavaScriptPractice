import React from 'react'

const Card = (props) => {
  return (
    
    <div className='mr-5 bg-black text-white text-center inline-block p-6 justify-center '>
      <img className='h-32 w-32 rounded-full mb-3 ' src={props.photo} alt=''></img>
     <h1 className='text-2xl font-semibold mb-4 mt-4' >{props.name} </h1>
     <h2 className='text-2xl font-semibold mb-4' >{props.age}</h2>
     <h2 className='text-2xl font-semibold mb-4' >{props.city}</h2>
     <button className='bg-emerald-300 text-black px-2 py-2 rounded font-medium'> Submit</button>
      </div>
  )
}

export default Card
