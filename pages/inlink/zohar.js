import WorksModule from "../../components/WorksModule"
import Layout from '../../components/LayoutModule'

const img= [
  {
      image:'/icons/reactjs.png'
  },
  {
      image:'/icons/nextjs.png'
  },
  {
      image:'/icons/nodejs.png'
  },
  {
    image:'/icons/mongodb.png'
},
{
  image:'/icons/python.png'
},
]

const slides= [
  {
    url: '/apps/z1.png'
  },
  {
    url: '/apps/z2.png'
  },
  {
    url: '/apps/z3.png'
  },

]

const description = 'Zohar its an app written in React Native and running Node.js and MongoDB on the background. Python is also used to scrap the news from the web.'

const link = 'https://play.google.com/store/apps/details?id=com.zohar.app&hl=en_US&gl=US'

export default function Zohar() {

  
    return(


<WorksModule 
title={'Zohar News'}
description={description}
icons={img}
slides={slides}
logo={'/zoharlogo.png'}
link={link}

/>


    )

}
