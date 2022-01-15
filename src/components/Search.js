import React from 'react'

function Search() {
    return (
        <div className='search'>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Type a keyword" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0 search-btn" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search
