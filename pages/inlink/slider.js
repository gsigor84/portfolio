import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const slider = ({slides}) => {
  return (
    <SimpleImageSlider
    width={800}
    height={800}
    images={slides}
    showBullets={true}
    showNavs={true}
   
  />
  )
}

export default slider