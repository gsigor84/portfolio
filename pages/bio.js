
import Box from '@mui/material/Box';
import { Button } from 'semantic-ui-react'
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Grid from '@mui/material/Grid';
import lottie from 'lottie-web';
import React,{useEffect, useRef} from 'react'




export default function Bio() {

const container = useRef(null)

  useEffect(()=>{

    lottie.loadAnimation({
      container:container.current,
      render:'svg',
      loop:true,
      autoplay:true,
      animationData: require('../public/json/design1.json'),
    })

  },[])

return(
  <Box sx={{ flexGrow: 1 }}>
 <Grid container 
   direction="row"
   justifyContent="center"
   alignItems="center"
 
   className='bioBox'
 >
        <Grid item xs={12} md={6} sx={{margin:'2%'}}>
          <div style={{backgroundColor:'#D9043D',padding:'6%',borderRadius: 10}}>
        <Typography variant="h2" component="div" className='subTitle1' >
  Welcome to my Portfolio 
</Typography>

<Typography  variant="h6"  className='p1'sx={{paddingBlock:'2%'}}  >
I’m Igor . I’m 37 years old. I’m a Web Developer who prioritize simplicity and usability.  
Proficient with the ability to multi-task and use multiple systems at any time.
Excellent problem solve & provide the best possible solution for the customer.
Strong ability to work as part of a team.
</Typography>



<Link href="/contact" >
<Button  style={{backgroundColor:'#F2F2F2',borderRadius: 5,color:'#D90452',marginBlock:'2%'}}>More information</Button>
</Link>
</div>
        </Grid>
        <Grid item xs={12} md={5}>
        <div style={{width:400,height:400}} className='svg1' ref={container}> </div>
        </Grid>
      
      </Grid>

</Box>

)

}