import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'
import Image from 'next/image'
import Slider from './SliderModule'
import Avatar from '@mui/material/Avatar';



export default function worksModule({title,description,icons,logo,link,slides}) {

  
    return(


<Box sx={{ flexGrow: 1}}>
 <Grid 
   container
   direction="row"
   justifyContent="space-between"
   alignItems="center"
sx={{backgroundColor:'#F2B705' }}
 >
        <Grid item xs={12} md={6} sx={{margin:'2%'}}>
          <div style={{padding:'6%',borderRadius: 10}}>
          <Link href='/' >
            <a>
            <ArrowBackIcon sx={{color:'white',marginBottom:'6%',fontSize:'30px'}}/>
            </a>
            </Link  >
            </div>
<p style={{fontSize:'60px', lineHeight:1,color:'white' }}className='subTitle1' >
What is {title} ?
</p>

<Typography variant="h6"   sx={{color:'white'}} >
{description}
</Typography>
<Grid item xs={12} md={12} sx={{paddingTop:'2%'}}  >
<a href={link} >
<Typography variant="h6"   sx={{color:'white'}} > 
  {link}
  </Typography>
  </a>
</Grid>
<Grid
  container
  direction="row"
  justifyContent="space-evenly"
  alignItems="flex-start"
 
  sx={{marginBlock:'4%',paddingRight:'50%'}}
>
            {icons.map((icon,index)=>{

return(

<Grid item xs={12} md={2} key={index}>
<Avatar  src={icon.image}  sx={{ width: 45, height: 45 }}  className='avatar' />
</Grid> 
)
            })}
             </Grid>
             

          
            </Grid>
<Grid item xs={12} md={12} className='backImage' sx={{backgroundImage: `${slides}`}} / >

            </Grid>
            </Box>

    )

}



