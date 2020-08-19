import React from 'react';
import { Link } from 'react-router-dom';

export default function Stack(props) {
    return (
        <Link to={'/'+props.id} className='item'>
            <div className='item'>
                <img src={props.logo} alt={`${props.name} logo`} />
                <div className='overlay'>
                    <h1>{props.name}</h1>
                </div>
            </div>
        </Link>
    );
}