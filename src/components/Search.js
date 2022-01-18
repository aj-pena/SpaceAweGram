import React, {useState, useEffect} from 'react'
import Card from './Card'
import Sky from '../assets/images/ryan-menke-untitled-artwork-5.jpg'

function Search() {
    const baseUrl = 'https://images-api.nasa.gov';
    let str = '';
    const [query, setQuery] = useState('earth')
    const [Darray, setDArray] = useState([])

    useEffect(()=>{
        //  Fetching data from API and storing in Array "Items" if the media type is "image"
         fetch(`${baseUrl}/search?q=${query}`)
          .then((response) => {
            console.log(response)
            return response.json()
          })
          .then((json) => {
              json.collection.items.map((item)=>{
                if (item.data[0].media_type === 'image'){
                  // item.setAttribute('key', item.data[0].nasa_id)
                  setDArray(Darray => [...Darray, item])               
                }         
              })        
          })
      }, [query]);

    function handleChange(e){
        str = e.target.value;
        console.log(str)
    }
    function handleClick(e){
        e.preventDefault();
        setDArray([]);
        setQuery(str)
    }
    return (
        <div >
            <div className='wrapper'></div>
            <div className="row ribbon-wrapper">
              {/* <!-- subtitle --> */}
                <div className="col ribbon">                  
                  <h3 id="subtitle">Welcome! 🔭</h3>                  
                </div>              
              </div>
            <div className='search'>
                <input onChange={handleChange} className="form-control mr-sm-2" type="text" placeholder="Type a keyword" aria-label="Search" name='search'/>
                <button onClick={handleClick} className="btn btn-outline-success my-2 my-sm-0 search-btn">Search</button>
            </div>
            <div className='cards-container'>
                {Darray.map((i) =>{
                    return <Card key={i.data[0].nasa_id} title={i.data[0].title} image={i.links[0].href} date={i.data[0].date_created} description={i.data[0].description} id={i.data[0].nasa_id} />
                })}
            </div>

        </div>
    )
}

export default Search
