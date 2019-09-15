import React from 'react';
import '../../App.css';

const CardComponent = (props) => {
    const { imageLinks, title, description, infoLink, publisher } = props.item.volumeInfo;
    
    let viewDescription;
    
    if ( description === null || description === undefined)
    {
        viewDescription = "";
    }
    else
    {
        viewDescription = description;
    }
   
    let card = <div className="card border-dark my-3">
                <img src={imageLinks === undefined ? "" : imageLinks.thumbnail.replace("http", "https")} className="card-img-top" alt={title} height="300" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="text-muted">{publisher}</p>
                    <small className="text-black">{viewDescription.length > 200 ? `${viewDescription.substring(0, 200)}...` : viewDescription}</small>
                </div>
                <div className="card-footer">
                    <a href={infoLink} className="card-link" target="_blank" rel="noopener noreferrer">Check it out!</a>
                </div>
            </div>;

    return(
        <div>
            { card }
        </div>
    );
}

export default CardComponent;