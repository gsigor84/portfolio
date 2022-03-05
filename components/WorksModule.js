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
<Grid container alignItems="center"  style={{justifyContent: 'space-between' ,maxWidth: 400, paddingTop:'2%',paddingBottom:'3%'}} >

{icons.map((icon,index)=>{

return(
   <div key={index}>
      
           <Image src={icon.image} alt='custmon'  className='image' width={50} height={50}/>
      
   </div>
)

})}
</Grid>
<Grid item xs={12} md={12}  >
<SimpleImageSlider
        width={'60%'}
        height={'50%'}
        images={slides}
        showBullets={true}
        showNavs={true}
      />
</Grid>

</Grid>


    )

}



