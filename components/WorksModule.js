import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'
import Image from 'next/image'
import SimpleImageSlider from "react-simple-image-slider";



export default function worksModule({title,description,icons,slides,logo,link}) {

  
    return(


<Grid container  spacing={4}  sx={{paddingTop:'3%'}}>
  
<Grid item xs={12} md={12}  >
      <Grid style={{textAlign: 'center',display: 'inline-block'}}>
      <ArrowBackIcon sx={{ fontSize: 20 }} color="text.secondary" />
      </Grid>
    <Grid  style={{display: 'inline-block',paddingLeft:'1%'}}>  
      <Typography color="text.secondary"  variant="h6" gutterBottom component="div" sx={{fontFamily: 'Nunito Sans', fontWeight: '600'}} >
<Link href="/" >Back to home </Link>
</Typography>
</Grid>
</Grid>

<Grid item xs={12} md={12}  >
         <Card sx={{ maxWidth: 345 }}    style={{boxShadow: "none"}}>
 <CardMedia
        component="img"
        height="140"
        image={logo}
        alt="green iguana"
      
      />
      </Card>
      </Grid>
      <Grid item xs={12} md={12}  >
<Typography variant="h5" gutterBottom component="div" sx={{fontFamily: 'Nunito Sans', fontWeight: '600'}} >
What is {title}
</Typography>

<Typography  variant="body2" color="text.secondary" >

{description}

<a href={link} style={{textDecoration: 'underline'}}>{link}</a>

</Typography>
</Grid>
<Grid container sx={{padding:'2%'}} >

{icons.map((icon,index)=>{

return(
   
<Grid item xs={2} md={1} sx={{padding:'2%'}}  >
           <Image src={icon.image} alt='custmon' width={50} height={50}/>
           </Grid>

)

})}
</Grid>

<Grid container sx={{padding:'2%'}} >

  
<SimpleImageSlider
        width={800}
        height={800}
        images={slides}
        showBullets={true}
        showNavs={true}
        
      />
  
</Grid>

</Grid>


    )

}



