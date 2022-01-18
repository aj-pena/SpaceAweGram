import React, {useState} from 'react'

function Card({ image, title, date, description, id }) {
    const [heart, setHeart] = useState('♡');
    function handleLike(){
        if(heart === '♡'){
            setHeart('♥')
        }else {
            setHeart('♡')
        }        
    }
    return (
        <div className="card" key={id}>
            <img src={image} className="card-img-top" alt="preview"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <br></br>
                {/* <p className='project-description card-text'>{description}</p> */}
                <h6>Date: {date}</h6>
                <button className='heart-btn' onClick={handleLike}>{heart}</button>                                                               
            </div>                  
        </div>
    )
}

export default Card
