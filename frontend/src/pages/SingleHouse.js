import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyleHero';

export default class SingleHouse extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            slug: this.props.match.params.id,
            defaultBcg
        };
    }
    // componentDidMount(){}
    
    static contextType = RoomContext;

    render() {
        const {getHouse} = this.context;
        const house = getHouse(this.state.slug);
        console.log(house);
        if(!house){
            return <div className="error">
                <h3>no such house could be found...</h3>
                <Link to="/houses" className="btn-primary">
                    back to houses
                </Link>
            </div>
        }
        const {
            name, 
            description, 
            capacity, 
            size, 
            price, 
            extras, 
            breakfast, 
            pets, 
            images
        } = house;
        const [mainImg,...defaultImg] = images;
        // console.log(defaultImg);

        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to="/houses" className="btn-primary">
                        Back to Houses
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item, index) => {
                        return <img key={index} src={item} alt={name} />
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : {size} SQFT</h6>
                        <h6>max capacity : {
                            capacity > 1 ? `${capacity} people` : `${capacity} person`}
                        </h6>
                        <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index) => {
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}
