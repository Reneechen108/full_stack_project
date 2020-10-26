import React, { Component } from 'react'
import { RoomContext } from '../Context';
import Loading from './loading';
import House from './House';
import Title from './Title';

export default class FeatureHouses extends Component {
    static contextType = RoomContext;

    render() {
        let { loading, featuredHouses : houses} = this.context;
        console.log(houses);
        houses = houses.map(house => {
            return <House key={house.id} house={house} />
        })
        return (
            <section className="feature-rooms">
                <Title title="featured houses" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : houses}
                </div>
            </section>
        )
    }
}
