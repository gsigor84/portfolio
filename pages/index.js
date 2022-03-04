
import Bio from './bio.js'
import Works from './works.js'
import Know from './know'
import Form from './form'
import Blog from './blog'
import Grid from '@mui/material/Grid';



export default function Home() {


  return (



<Grid container  spacing={4} >

<Grid item xs={12} md={12}  >
<Bio/>
</Grid>

<Grid item xs={12} md={12}  >
<Works/>
</Grid>

 <Grid item xs={12} md={12}  >      
<Blog/>
</Grid>

<Grid item xs={12} md={12}  >
<Know/>
</Grid>

<Grid item xs={12} md={12}  >
<Form/>
</Grid>

</Grid>




  )
}
