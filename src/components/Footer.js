import React from "react"

const Footer=()=>{
return(
    <>
    <footer className="page-footer font-small blue-grey lighten-5">
    
    <div className="container">
    <div className="row py-4 d-flex align-items-center">

    <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0">Get connected with us on social networks!</h6>
        </div>

        <div className="col-md-6 col-lg-7 text-center text-md-right">

          
          <a className="fb-ic">
            <i className="fab fa-facebook-f white-text mr-4"> </i>
          </a>
      
          <a className="tw-ic">
            <i className="fab fa-twitter white-text mr-4"> </i>
          </a>
        
          <a className="gplus-ic">
            <i className="fab fa-google-plus-g white-text mr-4"> </i>
          </a>
          
          <a className="li-ic">
            <i className="fab fa-linkedin-in white-text mr-4"> </i>
          </a>
          
          <a className="ins-ic">
            <i className="fab fa-instagram white-text"> </i>
          </a>

        </div>


      </div>
     

  


</div>



    </footer>
   
    </>
);

}

export default Footer;