import React, { useState, useEffect } from 'react'
import Card from '../component/Card'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { useDispatch } from 'react-redux';
import { getUsers }from '../action/auth'
import Cards from '../component/Cards';

const Networks = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [currentId, dispatch]);

    return (
        <div className='flex flex-col min-h-screen font-body grow'>
            <div>
                <Header />
                <Cards setCurrentId={setCurrentId} />
            </div>
            <Footer />
        </div>
    )
}

export default Networks
