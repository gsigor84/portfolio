import React from 'react'
import Slider from '@farbenmeer/react-spring-slider';
import Image from 'next/image'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const SliderModule = ({slides}) => {
  return (
    <Slider
    hasArrows={true}
    hasBullets
 
    >

{slides.map((slide,index)=>{

return(
  <>
 <div style={{ justifyContent: 'center',  display: 'flex'}}>
<Image src={slide.url}alt='custmon' 
layout="fill" 
className={'image'}
style={{ display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',margin:'10%'
  
 }}

/>
</div>
</>
    )

  })}

</Slider>
  )
}

export default SliderModule