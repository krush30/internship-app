import React, { useEffect, useState } from 'react'
import ShowData from './ShowData';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [api, setAPI] = useState(null);
    const QuadB_API = async () => {
        const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const json = await data.json();
        console.log(json);
        setAPI(json);
    }

    useEffect(() => {
        QuadB_API();
    }, [])
    const handleButtonClicked = () => {
        navigate("/summary");

    }



    return (
        api && (<div >
            <div className='flex'>
                {api.map(data => <ShowData key={data.show.id} API={data.show.name} IMG={data.show.image} />)}
            </div>

            <div>
                <button className='bg-gray-500 hover:opacity-50  text-black rounded-lg p-4 px-12 text-xl mx-3 ' onClick={handleButtonClicked}>Book Movie</button>
            </div>
        </div>
        )
    )
}

export default Home;
