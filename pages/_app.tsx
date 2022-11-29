import '../styles/globals.css';
import Layout from '../common/layout';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />
  return (
    <Layout footerstatus={pageProps.footerstatus}>
      <Component {...pageProps} />
    </Layout>
  )
}
