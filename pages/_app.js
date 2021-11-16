import '../styles/globals.css'
import Layout from '../components/Layout'
import SectionsProvider from '../context/SectionsProvider';

function MyApp({ Component, pageProps }) {
  return (
    <SectionsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SectionsProvider>
  );
}

export default MyApp;