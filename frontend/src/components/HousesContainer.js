import React from 'react'
import HousesFilter from './HousesFilter';
import HousesList from './HousesList';
import { withRoomConsumer } from '../Context';
import Loading from './loading';

function HousesContainer({context}){
    const {loading, sortedRooms, houses} = context;
    if(loading){
        return <Loading />
    }
    return (
        <div>
            {/* Hello from houses container */}
            <HousesFilter houses={houses} />
            <HousesList houses={sortedRooms} />
        </div>
    );
}

export default withRoomConsumer(HousesContainer);

// import React from 'react'
// import HousesFilter from './HousesFilter';
// import HousesList from './HousesList';
// import { RoomConsumer } from '../Context';
// import Loading from './loading';

// export default function HousesContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//                 //console.log(value);
//                 const {loading, sortedRooms, houses} = value;
//                 if(loading){
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         Hello from houses container
//                         <HousesFilter houses={houses} />
//                         <HousesList houses={sortedRooms} />
//                     </div>
//                 );
//             }}
//         </RoomConsumer>
        
//     )
// }
