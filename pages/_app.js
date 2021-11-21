import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="font-custom">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
