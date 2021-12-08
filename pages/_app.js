import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { Transition } from '@headlessui/react'

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="font-custom">
      <Transition
        appear={true}
        show={true}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <Component {...pageProps} />
      </Transition>
    </Layout>
  )
}

export default MyApp
