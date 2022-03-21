
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from 'next/link'


export default function Works() {

    return(

<Box sx={{ flexGrow: 1 }}>
<Grid
container
direction="row"
justifyContent="center"
alignItems="center"
className='workBox'
>
  


{itemData.map((item,index) => (
<Grid item xs={12} md={4}  key={index} className='workIn'>
<Link href={item.link}>
<a>

<div className='backwork' style={{backgroundImage: `url('${item.image}') `}}>
<div className='square'>
     
</div>
</div>
  </a>
</Link>

  </Grid>
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