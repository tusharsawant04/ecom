import React from "react"
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: require("./images/s2.jpg").default },
    { url: require("./images/s8.jpg").default },
    { url: require("./images/s3.jpg").default },
    { url: require("./images/s7.jpg").default },
    { url: require("./images/s6.jpg").default },
    { url: require("./images/s5.jpg").default },
    { url: require("./images/s4.jpg").default },
];
const Imgslide=()=>{
return(
    <>
    <div className="col-xs-1" align="center">
<SimpleImageSlider
        width={760}
        height={570}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        loop={true}
        autoPlayDelay={5}
      />
      </div>
    </>
);
}
export default Imgslide;