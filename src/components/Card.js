import React from 'react'

function Card({ image, title, date, description }) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="preview"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className='project-description card-text'>{description}</p>
                <p>{date}</p>                                                               
            </div>                  
        </div>
    )
}

export default Card
