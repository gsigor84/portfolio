import React ,{useEffect} from "react";
import dynamic from 'next/dynamic'
import { linearProgressClasses } from "@mui/material";
import { CenterFocusStrong } from "@mui/icons-material";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

let x = 50;


export default  (props) => {

  useEffect(() => {
    x = window.innerWidth

    
},[])
  
	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(x, 200).parent(canvasParentRef);
    p5.frameRate(30);
	
   	};

     const draw = (p5) => {
     
	p5.background('white');
  
  
 
    p5.fill('#D9043D')
    p5.stroke('#D9043D');

    
    p5.strokeWeight(10);
    p5.stroke('#D9043D');

   p5.bezier(10,0,200,50,400,80,600,0);

  p5.stroke('#D9043D');

  p5.bezier(400,0,800,50,1000,100,1200,0);

  
{/* A JSX comment */}


     }



// Will only render on client-side
	return <Sketch setup={setup} draw={draw} />;
};