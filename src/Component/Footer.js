import React from "react";
import "./style.css"

function FooterPage(){
    return(
        <>
        {/* footer start */}
        <footer className="container-fluid skycolor footer bd-footer py-4">
          <div className="container">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">sandip kumar mahto</div>
              <div className="col-4">contact</div>
            </div>
          </div>
          <div className="container border-top">
            <div className="row">
              <div className="col-4">
                <p>© 2024 sandip kumar mahto </p>
              </div>
              <div className="col-4"></div>
              <div className="col-4">contact</div>
            </div>
          </div>
        </footer>
        {/* footer end */}
      </>
      
    )
}

export default FooterPage;