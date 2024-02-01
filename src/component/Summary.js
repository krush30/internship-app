import React from 'react'

const Summary = ({ name, IMG, rating, summary }) => {
    console.log(rating.average);

    return (
        <div className=' p-10'>
            <img className='w-96 ' src={IMG?.original} alt="IMGOriginal" />
            <h1 className='py-4 px-4 text-3xl font-bold text-white  '>{name}</h1>
            <h4 className='py-4 px-4 text-xl font-bold text-white  '>Rating:{rating.average}</h4>
            <h4 className='text-white'>Overview {summary}</h4>
        </div>
    )
}

export default Summary;
