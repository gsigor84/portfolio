import React from 'react'
import Slider from '@farbenmeer/react-spring-slider';
import Image from 'next/image'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const ArrowComponent = ({onClick, direction}) => {

  if (direction === 'right') {
    return(
    <ChevronRightIcon sx={{ color: 'white',fontSize: 40 }}  onClick={onClick} >rrrrr</ChevronRightIcon >)
  } else {
    return(
     <KeyboardArrowLeftIcon sx={{ color: 'white',fontSize: 40 }}   onClick={onClick} >llllll</KeyboardArrowLeftIcon>)
  }


  return (
   
    <div
      style={{
        border: '1px solid black',
        padding: '1em',
        backgroundColor: 'white'
      }}
      onClick={onClick}
    >
    

      {direction}
    </div>
  );

    }

const SliderModule = ({slides}) => {
  return (
    <Slider
    hasArrows={true}
    hasBullets
    ArrowComponent={ArrowComponent}
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