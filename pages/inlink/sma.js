import WorksModule from "../../components/WorksModule"
import Layout from '../../components/LayoutModule'

const img= [
  {
      image:'/icons/python.png'
  },
  {
    image:'/icons/facebook.png'
},
{
    image:'/icons/instagram.png'
},

]


const slides= 'url(/apps/s1.png)'

const link = 'https://github.com/gsigor84/SMA'
const descripiton = 'Written in Python Scrap the web and the social media Apps to create content for your Facebook and Instagram. Automatic post on your social media: Photos, Videos and Links.'

export default function Sma() {

  
    return(


<WorksModule 
title={'Social Media Automation'}
description={descripiton}
icons={img}
slides={slides}
logo={'/smalogo.png'}
link={link}
/>


    )

}
