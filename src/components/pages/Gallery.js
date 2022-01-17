import React, {useState, useEffect} from 'react'
import Card from '../Card'

function Gallery() {
    const state = {
        search: 'earth',
        photo: ''
      };
      const [Darray, setDArray] = useState([])
      const baseUrl = 'https://images-api.nasa.gov';      
    
      useEffect(()=>{
        //  Fetching data from API and storing in Array "Items" if the media type is "image"
        fetch(`${baseUrl}/search?q=${state.search}`)
          .then((response) => {
            return response.json()
          })
          .then((json) => {
              json.collection.items.map((item)=>{
                if (item.data[0].media_type === 'image'){
                  setDArray(Darray => [...Darray, item])               
                }         
            })        
          })
      }, []);

   
    // console.log(items)

    return (
        <div className='cards-container'>
            {Darray.map((i) =>{
               return <Card title={i.data[0].title} image={i.links[0].href} date={i.data[0].date_created} description={i.data[0].description} />
             })}
        </div>
    )
}

export default Gallery
