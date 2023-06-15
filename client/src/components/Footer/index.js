import React from "react";
import "../Footer/index.css";


function Footer(){
    return(
        <footer className= "footer d-flex">
            <div>
                <a href ="https://github.com/juhuyoon" target="_blank" rel="noreferrer">
                  <img alt="Github" className="footer-img " src={require("../../assets/icons8-github-24.png")}/></a>
                <a href ="https://www.linkedin.com/in/juhuyoon/" target="_blank" rel="noreferrer">
                  <img alt="Linkedin" className="footer-img" src={require("../../assets/icons8-linkedin-30.png")}/></a>
                <a href ="https://www.facebook.com/junghoon.yoon.505" target="_blank" rel="noreferrer">
                  <img alt="Facebook" className="footer-img" src={require("../../assets/icons8-facebook-30.png")}/></a>               
            </div> 
    {/* <div className="row"> */}
    {/* // <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
    //  <ul className="list-unstyled list-inline social text-center">
    //   <li className="list-inline-item"><i className="fa fa-facebook"></i></li>
    //   <li className="list-inline-item"><i className="fa fa-twitter"></i></li>
    //   <li className="list-inline-item"><i className="fa fa-instagram"></i></li>
    //   <li className="list-inline-item"><i className="fa fa-google-plus"></i></li>
    //   <li className="list-inline-item"><i className="fa fa-envelope"></i></li>
    //  </ul>
    // </div> */}

            <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} - JOBDROPPER</p>
      </div>
    </footer>
  );
};

export default Footer;