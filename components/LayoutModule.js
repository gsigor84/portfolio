import Head from 'next/head'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Layout({children}) {


    return (
    
      <div className='layoutBox'>
        <Head>
 
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;600&family=Public+Sans:wght@400;600&display=swap" rel="stylesheet"/>

       </Head>
    
    {children}

       </div>

    )

}