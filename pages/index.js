import Box from '@mui/material/Box';
import Bio from './bio.js'
import Work2 from './work2.js'
import Know from './know'
import Form from './form'
import Blog from './blog2'
import Grid from '@mui/material/Grid';





export default function Home() {


  return (

  

<Grid container 
 direction="row"
 justifyContent="center"
 alignItems="flex-start"
className="fullscreen"
>

<Grid item xs={12} md={12}  >
<Bio/>

</Grid>



<Grid item xs={12} md={12} sx={{marginTop:'10%'}}  >
<Work2/>
</Grid>

 <Grid item xs={12} md={12}    >      
<Blog/>
</Grid>



<Grid item xs={12} md={12} >
<Form/>
</Grid>
<Grid item xs={12} md={12} sx={{marginTop:'5%'}}    >
<Know/>
</Grid>
</Grid>




  )
}
