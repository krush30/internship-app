import React from 'react'
import Home from './Home';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ShowSummary from './ShowSummary';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/summary",
            element: <ShowSummary />
        },

    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )


}

export default Body;
