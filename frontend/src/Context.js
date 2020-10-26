import React, { Component } from 'react'
// import items from './data';
import Client from './Contentful';

// Client.getEntries({
//     content_type: "beachResortRoom"
// }).then(response => console.log(response.items));

const RoomContext = React.createContext();
// <RoomContext.Provider value={'hello'}
class RoomProvider extends Component {
    state={
        houses:[],
        sortedRooms: [],
        featuredHouses: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };
    // getData{}
    getData = async() => {
        try{
            let response = await Client.getEntries({
                content_type: "beachResortRoom",
                // order: 'sys.createdAt'
                order: "fields.price" // -fields.price
            });
            let houses = this.formatData(response.items);
            let featuredHouses = houses.filter(house => house.featured === true);
            let maxPrice = Math.max(...houses.map(item => item.price));
            let maxSize = Math.max(...houses.map(item => item.size));
            this.setState({
                houses, 
                featuredHouses, 
                sortedRooms: houses, 
                loading: false,
                price: maxPrice,
                maxPrice: maxPrice,
                maxSize: maxSize
            });
        }catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.getData();
        // let houses = this.formatData(items);
        // //console.log(houses);
        // let featuredHouses = houses.filter(house => house.featured === true);
        // let maxPrice = Math.max(...houses.map(item => item.price));
        // let maxSize = Math.max(...houses.map(item => item.size));
        // this.setState({
        //     houses, 
        //     featuredHouses, 
        //     sortedRooms: houses, 
        //     loading: false,
        //     price: maxPrice,
        //     maxPrice: maxPrice,
        //     maxSize: maxSize
        // });
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let house = {...item.fields, images, id}; //images : images overwrite
            return house;
        });
        return tempItems;
    }

    getHouse = (slug) => {
        let tempHouses = [...this.state.houses];
        const house = tempHouses.find(house => house.slug === slug);
        return house;
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, this.filterHouses)
        // const type = event.target.type;
        // const name = event.target.name;
        // const value = event.target.value;
        //console.log(`this is type: ${type}, this is name: ${name}, this is value: ${value}`);
    }

    filterHouses = () => {
        let {
            houses, type, capacity, price, minSize, maxSize, breakfast, pets
        } = this.state;
        // all the houses
        let tempHouses = [...houses];

        // transform value
        capacity = parseInt(capacity);
        price = parseInt(price);

        // filter by type
        if (type !== 'all') {
            tempHouses = tempHouses.filter(house => house.type === type);
        }

        // filter by capacity
        if(capacity !== 1){
            tempHouses = tempHouses.filter(house => house.capacity >= capacity);
        }

        // filter by price
        tempHouses = tempHouses.filter(house => house.price <= price);
        // filter by size
        tempHouses = tempHouses.filter(house => house.size >= minSize && house.size <= maxSize);
        // filter by breakfast
        if(breakfast){
            tempHouses = tempHouses.filter(house => house.breakfast === true);
        }
        // filter by pets
        if(pets){
            tempHouses = tempHouses.filter(house => house.pets === true);
        }

        // change state
        this.setState({
            sortedRooms: tempHouses
        })
        // console.log("hello");
    }

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state, 
                getHouse: this.getHouse, 
                handleChange: this.handleChange
                }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return (
        <RoomConsumer>
            {value => <Component {...props} context={value}/> }
        </RoomConsumer>
        );
    };
}

export{RoomProvider, RoomConsumer, RoomContext}