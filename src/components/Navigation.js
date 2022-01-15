import React from 'react'

export default function Navigation(props) {
    return (
        <div className="col-12 col-sm-6 col-md-8 col-lg-8 navigation">
            {/* <!-- buttons --> */}
            
                    <ul className="headerBtns">
                      <li><button onClick={() => props.setCurrentPage(0)} >Home</button></li>
                      <li><button onClick={() => props.setCurrentPage(1)}>Favourites</button></li>                      
                    </ul>                
              
        </div>
    )
}


