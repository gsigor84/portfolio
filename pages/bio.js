import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Grid from '@mui/material/Grid';


const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
  );

export default function Bio() {

return(

<Grid container  spacing={4} sx={{paddingTop:'5%'}} >

<Grid item xs={12} md={12}  > 
<Avatar alt="Remy Sharp" src="/1.png"  sx={{ width: 56, height: 56 }}/>
</Grid>

<Grid item xs={12} md={12}  > 

<Typography variant="h5" gutterBottom component="div" sx={{fontFamily: 'Nunito Sans', fontWeight: '600'}} >
  Welcome to my Portfolio <Emoji symbol="👋" label="waving"/>
</Typography>

<Typography  variant="body2" color="text.secondary" >
I’m Igor . I’m 37 years old. I’m a Web Developer who prioritize simplicity and usability.  
Proficient with the ability to multi-task and use multiple systems at any time.
Excellent problem solve & provide the best possible solution for the customer.
Strong ability to work as part of a team.
</Typography>



<Typography variant="h7" gutterBottom component="div" sx={{fontFamily: 'Nunito Sans', fontWeight: '600',textDecoration: 'underline',paddingTop:'2%' }} >
<Link href="/contact" >
Contact Me
</Link>
</Typography></Grid>


 


</Grid>



)

}