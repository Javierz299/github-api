import React, { Fragment } from 'react'

const SearchForm = ({params, onParamChange}) => {
    return (
        <Fragment>
            <form className="search-form">
                <label>Description:</label>
                <input placeHolder="search..."type="text" name="description" onChange={onParamChange} />
            </form>  
        </Fragment>
    )
}

export default SearchForm;
