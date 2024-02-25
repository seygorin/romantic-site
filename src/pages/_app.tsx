import { AppProps } from 'next/app';
import Layout from '@/widgets/layouts';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;