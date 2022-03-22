import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';


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

  const style = {
    width: '100%',
    maxWidth: '90%',
    bgcolor: 'background.paper',
  };
  
const Contact = () => {
  return (
    
  <Box sx={{ flexGrow: 1}}>
 <Grid 
   container
   direction="row"
   justifyContent="space-between"
   alignItems="center"
sx={{backgroundColor:'#D9043D' }}
 >
        <Grid item xs={12} md={6} sx={{margin:'2%'}}>
          <div style={{backgroundColor:'#D9043D',padding:'6%',borderRadius: 10}}>
          <Link href='/' >
            <a>
            <ArrowBackIcon sx={{color:'white',marginBottom:'6%',fontSize:'30px'}}/>
            </a>
            </Link  >
        <p style={{fontSize:'60px', lineHeight:1,color:'white' }}className='subTitle1' >
  Igor Silva
</p>
<Typography variant="h6"   sx={{color:'white'}} >
                
                I grew up in Sao Paulo.
    After I got my hands wet with python I soon discovered my passion for programming while doing web scrapping. 
    Now I live in England working full time freelance as aWeb Developer. In my spare time I like to go to the gym and reading.
    I enjoy building interactive, social mediaapplications with an eye on animated content.
    If you fancy a chat feel free to contact me:
                    </Typography>
  
   
    
    <Typography  variant="h6" sx={{marginTop:'3%',color:'white'}}  >
    webdevigs@gmail.com
    </Typography>

    <Grid
  container
  direction="row"
  justifyContent="space-evenly"
  alignItems="flex-start"
 
  sx={{marginBlock:'4%',paddingRight:'50%'}}
>
{icons.map((item,index) => (
  <Link href={item.link} key={index} >
    <a>
<Grid item xs={12} md={4}>
<Avatar  src={item.image}  sx={{ width: 40, height: 40,paddingInline:'2%' }}  className='avatar' />

</Grid> 
</a>
</Link>
))}
</Grid>  
</div>
</Grid>  

<Grid item xs={12} md={5} >
  <div className='avatarDiv'>
<Avatar alt="Igor Silva" src="/1.png" sx={{ width: '50%', height: '50%' }}  className='avatar'/>
</div>
</Grid>  

</Grid> 

<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  sx={{margin:'4%'}}
>
<Grid item xs={12} md={6} className='courses'>
<span style={{fontSize:'30px',color:'black'}} className='subTitle1' >
     Courses
      </span>

<List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
      <a href='https://www.udemy.com/course/nextjs-dev-to-deployment/'>
      <Typography variant="h7"  sx={{color:'black'}} >
      Next.js Dev to Deployment 
      </Typography>
      </a>
      </ListItem>
      <Divider />
      <ListItem button divider>
      <a href='https://www.udemy.com/course/complete-python-developer-zero-to-mastery/'>
      <Typography variant="h7"  sx={{color:'black'}} >
      Complete Python Developer in 2022: Zero to Mastery
      </Typography>
      </a>
      </ListItem>
      <ListItem button>
      <a href='https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/'>
      <Typography variant="h7"  sx={{color:'black'}} >
      The Complete Web Developer in 2022: Zero to Mastery
      </Typography>
      </a>
      </ListItem>
      <Divider light />
      <ListItem button>
      <a href='https://www.youtube.com/watch?v=7CqJlxBYj-M&list=PLcPYCNY0Jmf5GJIYKfv-bq4QLyXnq3TsU&index=128'>
      <Typography variant="h7"  sx={{color:'black'}} >
      Learn the MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)
      </Typography>
      </a>
      </ListItem>
      <Divider light />
      <ListItem button>
      <a href='https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/'>
      <Typography variant="h7"  sx={{color:'black'}} >
      User Experience Design Essentials - Adobe XD UI UX Design
      </Typography>
      </a>
      </ListItem>
      <Divider light />
      <ListItem button>
      <a href='https://www.udemy.com/course/sql-and-postgresql/'>
      <Typography variant="h7"  sx={{color:'black'}} >
      SQL and PostgreSQL: The Complete Developers Guide
      </Typography>
      </a>
      </ListItem>
      <Divider light />
      <ListItem button>
      <a href='https://frontendmasters.com/courses/modern-seo/'>
      <Typography variant="h7"  sx={{color:'black'}} >
      Modern Search Engine Optimization (SEO)
      </Typography>
      </a>
      </ListItem>
    
    
    </List>
    
    
    </Grid> 
    </Grid> 

             
                </Box>
  )
}

export default Contact