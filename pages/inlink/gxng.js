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
    image:'/icons/strapi.png'
}
]

const slides= [
  {
      image:'/apps/g1.png'
  },
  {
    image:'/apps/g2.png'
},  {
    image:'/apps/g3.png'
},  {
    image:'/apps/g4.png'
},
]

const description ='Fitness App written in NEXT.JS and  using Strapi API. You can select the muscle part and make your workout plan.'

const link ='https://gxng.vercel.app'

export default function Gxng() {

  
    return(

<Layout>
<WorksModule 
title={'GXNG Fitness'}
description={description}
icons={img}
slides={slides}
logo={'/gxnglogo.png'}
link={link}
/>

</Layout>
    )

}
