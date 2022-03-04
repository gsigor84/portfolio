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
      image:'/apps/z1.png'
  },
  {
      image:'/apps/z2.png'
  },
  {
      image:'/apps/z3.png'
  },

]

export default function worksExe() {

  
    return(

<Layout>
<WorksModule 
title={'Zohar News'}
description={'We operate in a dynamic environment, and things are subject to change. The information provided is intended to outline the general framework direction, for informational purposes only. We may decide to add or remove new items at any time, depending on our capability to deliver while meeting our quality standards. The development, releases, and timing of any features or functionality remains at the sole discretion of MUI. The roadmap does not represent a commitment, obligation, or promise to deliver at any time.'}
icons={img}
slides={slides}
/>

</Layout>
    )

}



