import React, { useEffect, useState } from 'react'
import Summary from './Summary';

const ShowSummary = () => {
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
    return (
        api && (<div className='bg-black'>
            {api.map(data => <Summary key={data.show.id}
                name={data.show.name}
                IMG={data.show.image}
                rating={data.show.rating}
                summary={data.show.summary} />)}

        </div>)
    )
}

export default ShowSummary;
