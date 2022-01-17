import React, {useState} from 'react'
import Gallery from './pages/Gallery'

function Search() {
    const [searchTerm, setSearchTerm] = useState('earth')
    let term = '';
    function handleChange(e){
        term = e.target.value;
        console.log(term)
    }
    function handleSearch(){
        console.log(term)
    }


    return (
        <div className='search'>
            <form className="form-inline my-2 my-lg-0">
            <input onChange={handleChange} className="form-control mr-sm-2" type="search" placeholder="Type a keyword" aria-label="Search" name='q'/>
            <button onClick={handleSearch} className="btn btn-outline-success my-2 my-sm-0 search-btn" type="submit">Search</button>
            </form>
            <div>
                <Gallery term={searchTerm}/>
            </div>          

        </div>
    )
}

export default Search
