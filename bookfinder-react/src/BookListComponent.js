import React from 'react';
import CardComponent from './Components/Common/CardComponent';

export const BookListComponent = ({ list }) => {
    let cards = <h3 className="d-flex text-center text-white">Loading...</h3>;

    if (list) {
        cards = list.map((item, num) => (
            <CardComponent key={num} item={item} />
        ))
    }

    return (
        <div className="d-flex flex-wrap justify-content-around">
            {cards}
        </div>
    )
}

