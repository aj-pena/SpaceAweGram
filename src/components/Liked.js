import React from 'react'

function Liked(props) {
    const myLiked = {
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        date: props.date
    }
    const myLibrary = []
    myLibrary.push(myLiked)


    return (
        <div>
            
        </div>
    )
}

export default Liked
