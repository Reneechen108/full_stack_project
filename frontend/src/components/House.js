import React from 'react'
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg'
import PropType from 'prop-types';

export default function House({house}) {
    const { name, slug, images, price } = house;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single family house" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per month</p>
                </div>
                <Link to={`/houses/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

House.PropType = {
    house: PropType.shape({
        name: PropType.string.isRequired,
        slug: PropType.string.isRequired,
        images: PropType.arrayOf(PropType.string).isRequired,
        price: PropType.number.isRequired
    })
}