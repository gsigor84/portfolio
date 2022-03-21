import lottie from 'lottie-web';
import React,{useEffect, useRef} from 'react'

const svg = () => {
    const container = useRef(null)

    useEffect(()=>{
  
      lottie.loadAnimation({
        container:container.current,
        render:'svg',
        loop:true,
        autoplay:true,
        animationData: require('../public/json/mancha.json'),
      })
  
    },[])
  return (
    <div className='svg3' ref={container}  >

    </div>
  )
}

export default svg