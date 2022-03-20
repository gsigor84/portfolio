import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image'
import lottie from 'lottie-web';
import React,{useEffect, useRef} from 'react'


const blog2 = () => {
    const container = useRef(null)
    useEffect(()=>{

        lottie.loadAnimation({
          container:container.current,
          render:'svg',
          loop:true,
          autoplay:true,
          animationData: require('../public/json/blog4.json'),
    
    
        })
    
      },[])

  return (
    <Box sx={{ flexGrow: 1 }}>
  <Grid container 
  
  >
        <Grid item xs={12} md={6} className='svg2'  >
     
        <span className='subTitle1' style={{color:'white',fontSize:'80px'}}>
Blog.
</span>

        </Grid>

        <Grid item xs={12} md={6} >

<Grid 
 container
 direction="row"
 justifyContent="flex-start"
 alignItems="center"
 sx={{paddingInline:'6%'}}
spacing={2}>
      <ImageListItem key="Subheader" cols={4}>
      </ImageListItem>
      {itemData.map((item,index) => (
        <Grid item xs={12} md={4} key={index}>
<a href={item.link}>
 
        <ImageListItem key={item.img} >
          <Image
            src={`${item.img}?w=150&h=150&fit=crop&auto=format`}
            key={index}
            alt={item.title}
         
            width={600}
      height={600}
          
          />

          <ImageListItemBar
            title={item.title}
          />
        </ImageListItem> </a>
        </Grid>
      ))}
    </Grid>
  

</Grid>
    </Grid>
</Box>
  )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1568283661163-c90193fd13f1',
      title: 'Easy use of props in Next.js',
      link:'https://medium.com/@webdevigs/easy-use-of-props-in-next-js-187fbaabfbb2'
    },
   
 
 
  ];

export default blog2