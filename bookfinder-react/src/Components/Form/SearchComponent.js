import React from 'react';

const SearchComponent = (props) => {

    return (
        <div className={`form-group ${props.errorClass}`}>
            <label className="text-white float-left" htmlFor="query">Query</label>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    value={props.value}
                    onChange={props.handleChange}
                    name="query"
                    className="form-control" 
                    placeholder="Search for a book!" 
                    aria-label="Search for a book!" 
                    aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button disabled={props.formValid} type="submit" className="btn btn-outline-warning">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default SearchComponent;