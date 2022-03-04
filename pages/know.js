import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function Know () {

    return(

        <Box sx={{ flexGrow: 1 }} >

<Grid container  spacing={4} style={{paddingTop:'3%'}}>
  
  <Grid item xs={12}  md={3} >
  <Typography gutterBottom variant="h6" component="div" color="text.secondary">
          Languages & Frame Works
        </Typography>
        <Typography gutterBottom variant="h7" component="div" color="text.secondary">
          HTML, CSS
    </Typography>
  <Typography gutterBottom variant="h7" component="div" color="text.secondary">
          React Js
    </Typography>
    <Typography gutterBottom variant="h7" component="div" color="text.secondary">
          React Native
    </Typography>
    <Typography gutterBottom variant="h7" component="div" color="text.secondary">
         Next Js
    </Typography>


    <Typography gutterBottom variant="h7" component="div" color="text.secondary">
          Python
    </Typography>

</Grid>
  
  <Grid item xs={12}  md={3} >
  <Typography gutterBottom variant="h6" component="div" color="text.secondary">
          Basic Knowledge
        </Typography>

        <Typography gutterBottom variant="h7" component="div" color="text.secondary">
         NodeJS
    </Typography>
    <Typography gutterBottom variant="h7" component="div" color="text.secondary">
    PostgreSQL 
    </Typography>
    <Typography gutterBottom variant="h7" component="div" color="text.secondary">
    Strapi
    </Typography>
  
  </Grid>
  <Grid item xs={12}  md={3}  >
  <Typography gutterBottom variant="h6" component="div" color="text.secondary">
  Graphic Design
        </Typography>
        <Typography gutterBottom variant="h7" component="div" color="text.secondary">
   PhotoShop
    </Typography>
    <Typography gutterBottom variant="h7" component="div" color="text.secondary">
   Illustrator
    </Typography>
    <Typography gutterBottom variant="h7" component="div" color="text.secondary">
   Adobe XD
    </Typography>

  </Grid>

</Grid>
        </Box>

    )
}
export default Know