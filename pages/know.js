import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function Know () {

    return(

        <Box sx={{ flexGrow: 1 }} >

<Grid container 
 direction="row"
 justifyContent="center"
 alignItems="flex-start"
 spacing={2}
 className='knowBox'
style={{
  padding:'10%',backgroundColor:'black',
  
  }}>
  
  <Grid item xs={12}  md={4}  sx={{height: '20vh'}}>
  <p className='biosub'>
          Languages & Frame Works
        </p>
        <p className='bio'>
          HTML, CSS
    </p>
    <p className='bio'>
          React Js
          </p>
    <p className='bio'>
          React Native
          </p>
    <p className='bio'>
         Next Js
         </p>


    <p className='bio'>
          Python
          </p>

</Grid>
  
  <Grid item xs={12}  md={4} sx={{height: '20vh'}}>
  <p className='biosub'>
          Basic Knowledge
        </p>

        <p className='bio'>
         NodeJS
         </p>
    <p className='bio'>
    PostgreSQL 
    </p>
    <p className='bio'>
    Strapi
    </p>
  
  </Grid>
  <Grid item xs={12}  md={4} sx={{height: '20vh'}}  >
  <p className='biosub'>
  Graphic Design
        </p>
        <p className='bio'>
   PhotoShop
   </p>
    <p className='bio'>
   Illustrator
   </p>
    <p className='bio'>
   Adobe XD
   </p>

  </Grid>

</Grid>
        </Box>

    )
}
export default Know