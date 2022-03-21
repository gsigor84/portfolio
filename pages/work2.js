
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export default function Works() {

    return(
      <Box sx={{ flexGrow: 1 }}>
      <Grid container 
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      spacing={2}
      className='workBox'
    
      >    
        {itemData.map((item,index) => (
          
         <Card sx={{ maxWidth: 345,boxShadow: "none"}} key={index} className='card'>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="green iguana"
       
      />
      <CardContent>
        <p  className='subTitle1' style={{color:'black',fontSize:'20px',alignSelf:'center'}}>
         {item.title}
        </p>
        <p  className='p1' style={{color:'black',fontSize:'14px'}}>
         {item.description}
        </p>
      </CardContent>
      <CardActions>
      </CardActions>
</Card>


))}

</Grid>
    </Box> 

    )
}

const itemData = [
  {
    image: 'gxmlay.jpg',
    title: 'GXNG Fitness',
    description:'Fitness App written in NEXT.JS and using Strapi API. You can select the muscle part and make your workout plan.',
    link:'/inlink/gxng'
  },
  {
    image: 'zoharlay.jpg',
    title: 'Zohar News',
    description:'Zohar its an app written in React Native and running Node.js and MongoDB on the background. Python is also used to scrap the news from the web.',
    link:'/inlink/zohar'
  },
  {
    image: 'smalogo.png',
    title: 'Media Automation',
    description:'Written in Python Scrap the web and the social media Apps to create content for your Facebook and Instagram. Automatic post on your social media: Photos, Videos and Links.',
    link:'/inlink/sma'
  },
  

];