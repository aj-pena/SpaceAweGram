import React, {useState} from 'react'
import Heart from "react-animated-heart";

function Card({ image, title, date, id }) {
    
    const [isClick, setClick] = useState(false);

   
    return (
        <div className="card" key={id}>
            <img src={image} className="card-img-top" alt="preview"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <br></br>
                {/* <p className='project-description card-text'>{description}</p> */}
                <h6>Date: {date}</h6>
                <div className='heart-btn'>
                <Heart isClick={isClick} onClick={() => setClick(!isClick)}/>   
                </div>                                                            
            </div>                  
        </div>
    )
}

export default Card
