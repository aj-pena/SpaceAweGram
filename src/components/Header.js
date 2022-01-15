import React from 'react'
import Search from './Search'

export default function Header() {
    return (
        <div>
             {/* <!-- Header --> */}
            <div className="row header">
                {/* <!-- name --> */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <h1 id="AppName">SpaceAweGram</h1>
              </div>              
                <Search/>             
            </div>
            {/* <!-- Ribbon --> */}
            <div className="row ribbon-wrapper">
              {/* <!-- subtitle --> */}
                <div className="col ribbon">                  
                  <h3 id="subtitle">Hi ! I am a web developer passionate about mountains, creating and drawing.</h3>
                </div>              
              </div>
        </div>
    )
}


