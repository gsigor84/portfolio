import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image'


const icons= [
    {
        image:'/icons/medium.png',
        link:'https://medium.com/@webdevigs'
    },
    {
        image:'/icons/github.png',
        link:'https://github.com/gsigor84'
    },
    {
      image:'/icons/linkedin.png',
      link:'https://www.linkedin.com/in/igor-silva-935917233'
  }
  ]

const Contact = () => {
  return (
    <div>
    <Box sx={{  paddingBottom:'25%', paddingTop:'5%',}} >
   

    <Grid container spacing={1}  >

<Grid item xs={1} md={1} sx={{marginTop:'1%'}} >

      <ArrowBackIcon sx={{ fontSize: 20 }} color="text.secondary" /> 

      </Grid>


      <Grid item xs={11} md={11} >
  
      <Typography color="text.secondary"  variant="h6" gutterBottom component="div" sx={{fontFamily: 'Nunito Sans', fontWeight: '600'}} >
<Link href="/" >Back to home </Link>
</Typography>

</Grid>
</Grid>

<Grid item  xs={10} sx={{marginTop:'3%'}} >
                
<Avatar alt="Remy Sharp" src="/1.png"  sx={{ width: '20%', height:'20%'}}/>
                </Grid>
            <Grid   style={{padding:'3%'}}>
                <Box>
            <Typography variant="h6"   color="text.secondary" >
                
            I grew up in Sao Paulo.
After I got my hands wet with python I soon discovered my passion for programming while doing web scrapping. 
Now I live in England working full time freelance as aWeb Developer. In my spare time I like to go to the gym and reading.
I enjoy building interactive, social mediaapplications with an eye on animated content.
If you fancy a chat feel free to contact me:
                </Typography>
</Box>
<Box>

<Typography  variant="h6" color="text.secondary" sx={{marginTop:'3%'}}  >
webdevigs@gmail.com
</Typography>

</Box>
                <Grid  container  style={{maxWidth: 400, paddingTop:'5%',}} >

{icons.map((icon,index)=>{

return(
   <Grid item xs={2} key={index}>
        <a href={icon.link} >
           <Image src={icon.image} alt='custmon' className='image'  width={50} height={50}/>
      </a>
   </Grid>
)

})}
</Grid>

                </Grid>
                </Box>
                </div>
  )
}

export default Contact