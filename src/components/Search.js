import React, {useState} from 'react'
import Gallery from './pages/Gallery'

function Search() {
    const [query, setQuery] = useState('earth')
    let str = '';
    function handleChange(e){
        str = e.target.value;
        console.log(str)
    }
    


    return (
        <div className='search'>
            
            <input onChange={handleChange} className="form-control mr-sm-2" type="text" placeholder="Type a keyword" aria-label="Search" name='q'/>
            <button onClick={()=>setQuery(str)} className="btn btn-outline-success my-2 my-sm-0 search-btn">Search</button>
            
            <div>
                <Gallery data={query}/>
            </div>          

        </div>
    )
}

export default Search
