import * as React from 'react';
import Head from 'next/head'
import Container from '@mui/material/Container';


export default function Layout({children}) {


    return (
        <div>
        <Container maxWidth="lg">
        <Head>
 
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;600&family=Public+Sans:wght@400;600&display=swap" rel="stylesheet">
 
        </link>
       </Head>
    {children}
       </Container>
</div>
    )

}