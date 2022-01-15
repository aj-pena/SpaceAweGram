import React from 'react'

function Card(image, title, date, description) {
    return (
        <div className="card card-medium medium-app">
            <img src={image} className="card-img-top medium" alt="screenshot of the deployed application's homepage"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className='project-description'>{description}</p>
                <date>{date}</date>                                          
            </div>                  
        </div>
    )
}

export default Card
