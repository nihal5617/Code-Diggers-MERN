import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';

const Cards = ({ setCurrentId }) => {

    const users = useSelector((state) => state.users);

    return (
        <div>
            {users.map((post) => (
                <Card post={post} setCurrentId={setCurrentId} />
            ))}
        </div>
    )
}

export default Cards
