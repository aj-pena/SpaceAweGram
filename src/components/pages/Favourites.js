import React from 'react'
import Rocket from '../../assets/images/darko-markovic-dar-mar-exer.jpg'

function Favourites() {
    return (
        <div>
            <div className='in-construction'>
                <h1> ⚠️ Section in Construction </h1>
                <p> Hey there! You have reached a section that will be developed in the future. 
                In the meantime, please accept our apologies (🙇🏻) and thanks for taking the time to explore!
                </p>
                         
            </div>
            <img className='rocket' src={Rocket} alt='Digital painting of a NASA rockett by darko-markovic-dar-mar-exer'/>
            <p className='painter'>Image by Darko Darmar Markovic</p>
        </div>
    )
}

export default Favourites
