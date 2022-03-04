import Image from 'next/image'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import React, { useState } from 'react';



function Imageslider  ({slides}) {
const[current, setCurrent]=useState(0);

const length = slides.length;

const nextSlide =()=>{
    setCurrent(current === length -1 ? 0 : current +1)
}

const prevSlide =()=>{
    setCurrent(current === 0 ?  length -1  : current -1)
}


if (!Array.isArray(slides)|| slides.length <= 0 ){
    return null
}


  return (
    <div className='slider'> 
    
       <NavigateBeforeIcon className='left-arrow' onClick={prevSlide}/>
       < NavigateNextIcon className='right-arrow' onClick={nextSlide}/>
{slides.map((slide,index)=>{

return(
   <div className={index === current ? 'slider active': 'slide'} key={index}>
       {index=== current && (
           <Image src={slide.image} alt='custmon'  className='image' width={460} height={217} layout="responsive" />
       )}
        
   </div>
)



})}

    </div>
  )
}

export default Imageslider