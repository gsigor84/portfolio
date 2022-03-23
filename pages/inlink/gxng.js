import WorksModule from "../../components/WorksModule"

const img= [
  {
      image:'/icons/reactjs.png'
  },
  {
      image:'/icons/nextjs.png'
  },
  {
    image:'/icons/strapi.png'
}
]

const slides= 'url(/apps/g1.png)'; 


const description ='Fitness App is written in NEXT.JS and use Strapi API. You can select the muscle part and make your workout plan.'

const link ='https://gxng2.vercel.app'

export default function Gxng() {

  
    return(


<WorksModule 
title={'GXNG Fitness'}
description={description}
icons={img}
slides={slides}
logo={'/gxnglogo.png'}
link={link}
/>


    )

}
