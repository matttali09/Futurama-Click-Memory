import React from 'react';
import "./style.css";


const CarouselItem = props => {
    return (
    <a className="carousel-item waves-effect waves-dark" href="#one!" >
        <img
            key={props.id}
            id={props.id}
            src={props.src}
            alt={props.alt}
            onClick={() => props.handleClick(props.character)}
        />
    </a>
)};

export default CarouselItem;