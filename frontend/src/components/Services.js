import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktail",
                info: 'Lorem ispsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon: <FaHiking />,
                title: "popular hiking",
                info: 'Lorem ispsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle van",
                info: 'Lorem ispsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon: <FaBeer />,
                title: "free beer",
                info: 'Lorem ispsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='Services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
