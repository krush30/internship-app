import React from 'react'

const ShowData = ({ API, IMG }) => {
    const mediumImage = IMG?.medium;
    return (
        <div className=' p-2 w-36 hover:bg-gray-400 rounded-lg'>
            <div className=''>
                <img className='' src={mediumImage} alt='mediumImage' />
            </div>
            <h1 className='font-bold'>{API}</h1>
        </div>
    )
}

export default ShowData;
