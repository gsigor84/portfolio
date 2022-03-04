import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import ImageList from '../pages/slider/imageslider'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'
import Image from 'next/image'




export default function worksModule({title,description,icons,slides,logo,link}) {

  
    return(


<Box
      sx={{
        width: '100%',
        height: 100,
        paddingBottom:'25%',
        paddingTop:'5%',
      }}
    >
      <Grid style={{marginBottom:'2%'}} >
      <Grid style={{textAlign: 'center',display: 'inline-block'}}>
      <ArrowBackIcon sx={{ fontSize: 20 }} color="text.secondary" />
      </Grid>
    <Grid  style={{display: 'inline-block',paddingLeft:'1%'}}>  
      <Typography color="text.secondary"  variant="h6" gutterBottom component="div" sx={{fontFamily: 'Nunito Sans', fontWeight: '600'}} >
<Link href="/" >Back to home </Link>
</Typography>
</Grid>
</Grid>
         <Card sx={{ maxWidth: 345 }}    style={{boxShadow: "none"}}>
 <CardMedia
        component="img"
        height="140"
        image={logo}
        alt="green iguana"
      
      />
      </Card>
      <Box sx={{ maxWidth: 800,paddingTop:'2%' }}  >
<Typography variant="h5" gutterBottom component="div" sx={{fontFamily: 'Nunito Sans', fontWeight: '600'}} >
What is {title}
</Typography>

<Typography  variant="body2" color="text.secondary" >

{description}

<a href={link} style={{textDecoration: 'underline'}}>{link}</a>

</Typography>
</Box>
<Grid container alignItems="center"  style={{justifyContent: 'space-between' ,maxWidth: 400, paddingTop:'2%',}} >

{icons.map((icon,index)=>{

return(
   <div key={index}>
      
           <Image src={icon.image} alt='custmon'  className='image' width={50} height={50}/>
      
   </div>
)

})}
</Grid>
<Box style={{backgroundColor:'#F9F9F9',position: 'relative',marginBlock:'10%',padding:'5%',width:'80%'}}>


</Box>


        </Box>


    )

}



