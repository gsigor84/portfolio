
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import Image from 'next/image'


const Blog = () => {
  return (
 
    <Grid  container  spacing={4} >
<Grid item xs={12} md={12} style={{paddingBottom:'2%'}}> 
<Typography variant="h5" gutterBottom component="div" sx={{fontFamily: 'Nunito Sans', fontWeight: '600'}} >
  Blog
</Typography>
</Grid>
   
      
<Grid  container  spacing={2} style={{marginLeft:'4%'}} >
      <ImageListItem key="Subheader" cols={4}>
      </ImageListItem>
      {itemData.map((item,index) => (
        <Grid item xs={12} md={3} key={index}  >
<a href={item.link}>
 
        <ImageListItem key={item.img}>
          <Image
            src={`${item.img}?w=150&h=150&fit=crop&auto=format`}
            key={index}
            alt={item.title}
            
            width={300}
      height={300}
          
          />

          <ImageListItemBar
            title={item.title}
          />
        </ImageListItem> </a>
        </Grid>
      ))}
    </Grid>
      
 
  </Grid>
  )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1568283661163-c90193fd13f1',
      title: 'Easy use of props in Next.js',
      link:'https://medium.com/@webdevigs/easy-use-of-props-in-next-js-187fbaabfbb2'
    },
   
 
 
  ];

export default Blog