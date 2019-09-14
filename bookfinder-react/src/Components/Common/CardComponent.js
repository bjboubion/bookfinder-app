import React from 'react';
import '../../App.css';

const CardComponent = (props) => {
    const { imageLinks, title, description } = props.item.volumeInfo;

    
    let viewDescription;
    
    if ( description === null || description === undefined)
    {
        viewDescription = "";
    }
    else
    {
        viewDescription = description;
    }

   
    let card = <div className="card">
                <img src={imageLinks.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <small className="text-muted">{viewDescription.length > 200 ? `${viewDescription.substring(0, 200)}...` : viewDescription}</small>
                </div>
            </div>;


    return(
        <div>
            {card}
        </div>
    );
}

export default CardComponent;