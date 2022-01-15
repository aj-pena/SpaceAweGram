import React from 'react'
import Card from '../Card'

function Gallery() {
    const cards = []

    return (
        <div>
            {cards.map((card) =>{
               return <Card title={card.title} image={card.image} date={card.date} description={card.description} />
             })}
        </div>
    )
}

export default Gallery
