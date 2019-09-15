import React from 'react';

const SearchComponent = (props) => {

    return (
        <div className="input-group mb-3">
            <input 
                type="text" 
                value={props.value}
                onChange={props.handleChange}
                className="form-control" 
                placeholder="Search for a book!" 
                aria-label="Search for a book!" 
                aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <input className="btn btn-success" type="submit" value="Submit" />
            </div>
        </div>
    );
}

export default SearchComponent;