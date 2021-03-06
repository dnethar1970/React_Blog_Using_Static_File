import React from 'react';
import './card.styles.css';

const Card = (props) => {
    return (
        <div className="card" style={{width:props.width ? props.width : '100%'}} {...props}>
            {props.children}
        </div>
    )
};

export default Card;