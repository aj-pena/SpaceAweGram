import React from 'react'

import Navigation from './Navigation'

export default function Header(props) {
    return (
        <div>
             {/* <!-- Header --> */}
            <div className="row header">
                {/* <!-- name --> */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <h1 id="AppName">SpaceAweGram</h1>
              </div>              
              <Navigation setCurrentPage={props.setCurrentPage} />             
            </div>
            {/* <!-- Ribbon --> */}
            <div className="row ribbon-wrapper">
              {/* <!-- subtitle --> */}
                <div className="col ribbon">                  
                  <h3 id="subtitle">Welcome! 🔭</h3>                  
                </div>              
              </div>
        </div>
    )
}


