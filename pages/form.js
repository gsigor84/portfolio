import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';




export default function Form() {


    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_d4444hv', 'template_zor9k67',e.target, 'user_1SCe42Na5df2ul4XXc4nV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  

    return(

        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2} style={{paddingTop:'3%'}}>
 
  <Grid item xs={12} style={{backgroundColor:'#F9F9F9', paddingBottom:'2%'}} >
  <form onSubmit={sendEmail}>
  <Typography variant="h5" gutterBottom component="div" sx={{fontFamily: 'Nunito Sans', fontWeight: '600'}}  >
Looking for help with Web Development
</Typography>

<Typography variant="h7" gutterBottom component="div" sx={{fontFamily: 'Nunito Sans', fontWeight: '400'}} color="text.secondary">
Send me details
</Typography>


<Box style={{ paddingRight:'2%',paddingTop:'2%',}} >
  
<TextField
fullWidth 
        id="outlined-name"
        label="Name"
        size="small"
        name="name" 
      />
</Box>


<Box style={{ paddingRight:'2%',paddingTop:'2%',}} >
<TextField
fullWidth 
        id="outlined-name"
        label="Email Adress"
        multiline
        size="small"
        name="email" 
      />
      
</Box>

<Box style={{ paddingRight:'2%',paddingTop:'2%',}} >
<TextField
fullWidth 
          id="standard-multiline-static"
          label="Detail"
          multiline
          rows={4}
          name="message" 
          
        />
      
</Box>

<Box style={{ paddingRight:'2%',paddingTop:'2%',}} >

<Typography  variant="h7" gutterBottom component="div" sx={{ textDecoration: 'underline',textAlign: 'right' }}  >

<input type="submit" value="Submit" style={{textDecoration: 'underline',textAlign: 'right' }} />
</Typography>

</Box>
</form>
  </Grid>
 
  </Grid>
            </Box>
    )
}