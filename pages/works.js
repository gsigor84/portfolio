
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from 'next/link'

const logo3 = 'smalogo.png'

export default function Works() {

    return(

<Box sx={{ flexGrow: 1 }}>
<Grid container  spacing={4} >
  


{itemData.map((item,index) => (
<Grid item xs={12} md={4}  key={index} >
   
<Card sx={{ maxWidth: 345 }} key={index}   style={{boxShadow: "none"}}>
     

      <CardMedia
        component="img"
        height="150px"
      key={index}
        image={item.image}
   
      />
      
      <CardContent  >
    
        <Typography variant="h6" key={index}>
         {item.title}
        </Typography>
    
        <Typography variant="body2" color="text.secondary">
       
        {item.description}
        
        </Typography>
      </CardContent>
      <CardActions>
      <Typography variant="h7"   sx={{margin:'0' ,paddingTop:'2%', fontWeight: '600',textDecoration: 'underline' }} >
      <Link href={item.link} >
      See More
        </Link>
</Typography>
  
      </CardActions>
   

   </Card>

  </Grid>
))}

 
</Grid>


</Box>

    )
}

const itemData = [
  {
    image: 'gxnglay.jpg',
    title: 'GXNG Fitness',
    description:'Fitness App written in NEXT.JS and using Strapi API. You can select the muscle part and make your workout plan.',
    link:'/inlink/gxng'
  },
  {
    image: 'zoharlogo.png',
    title: 'Zohar News',
    description:'Zohar its an app written in React Native and running Node.js and MongoDB on the background. Python is also used to scrap the news from the web.',
    link:'/inlink/zohar'
  },
  {
    image: 'smalogo.png',
    title: 'Social Media Automation',
    description:'Written in Python Scrap the web and the social media Apps to create content for your Facebook and Instagram. Automatic post on your social media: Photos, Videos and Links.',
    link:'/inlink/sma'
  },
  

];