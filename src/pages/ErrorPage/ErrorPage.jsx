import React from 'react';
import { Helmet } from 'react-helmet';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='h-full my-auto text-center mx-auto'>
            <Helmet>
                <title>Error!</title>
            </Helmet>
            <h1 className='text-7xl font-bold text-center'>Error!</h1>
            <img className='mx-auto' src="https://img.freepik.com/free-vector/404-concept-with-desert_23-2147733751.jpg?ga=GA1.1.1891665980.1724647832&semt=ais_hybrid" alt="" />
        </div>
    );
};

export default ErrorPage;