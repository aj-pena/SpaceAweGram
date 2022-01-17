import React, {useState, useEffect} from 'react'
import Card from '../Card'

function Gallery( { term } ) {
   
      const [Darray, setDArray] = useState([])
      const baseUrl = 'https://images-api.nasa.gov';      
    
      useEffect(()=>{
        //  Fetching data from API and storing in Array "Items" if the media type is "image"
        fetch(`${baseUrl}/search?q=${term}`)
          .then((response) => {
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
      }, []);

   
    // console.log(items)

    return (
        <div className='cards-container'>
            {Darray.map((i) =>{
               return <Card key={i.data[0].nasa_id} title={i.data[0].title} image={i.links[0].href} date={i.data[0].date_created} description={i.data[0].description} id={i.data[0].nasa_id} />
             })}
        </div>
    )
}

export default Gallery
