import React from 'react';
import House from './House';

export default function HousesList({houses}) {
    if(houses.length === 0){
        return (
            <div className="empty-search">
                <h3>unfortuately no houses matched your search parameters</h3>
            </div>
        );
    }
    return (
        <section className="roomsList"> 
            <div className="roomslist-center">
                {houses.map(item => {
                    return <House key={item.id} house={item} />
                })}
            </div>
        </section>
    )
}
