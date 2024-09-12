import React from "react"
import HeaderPage from "./Header"
import FooterPage from "./Footer";

function HomePage(){
    return(
        <>
            <HeaderPage/>
        
            {/* main start */}
            <main>
              <div className="container-fluid main-first border border-5 border-warning">
                <div className="row align-items-center ">
                  <div className="col">
                    <div className="container">
                      <img
                        className="frontpic"
                        src="/frontpic.jpg"
                        alt="frontpic"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <h1 className="text-pinkcolor">Hi,</h1>
                    <h1 className="text-skycolor">I'm sandip kumar mahto</h1>
                    <h1 className="text-pinkcolor">full stack software developer</h1>
                  </div>
                </div>
              </div>
            </main>
            {/* main end */}
            <h1>homepage</h1>
            <FooterPage/>
            
        </>
    )
}

export default HomePage;