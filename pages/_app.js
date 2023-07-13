import Wrapper from '@/component/Wrapper'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Wrapper Component={Component} pageProps={pageProps} />
}
