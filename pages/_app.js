import '../styles/globals.css'
import Layout from "../components/LayoutModule"
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  )
  }

export default MyApp
