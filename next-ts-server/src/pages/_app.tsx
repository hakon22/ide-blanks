/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import App from 'next/app';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import favicon from '../images/favicon.ico';
import store from '../slices/index';
import General from '../components/App';
import '../scss/app.scss';
import isMobile from '../utilities/isMobile';

interface InitProps extends AppProps {
  isMob: boolean;
}

const init = (props: InitProps) => {
  const { pageProps, Component } = props;

  return (
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" href={favicon.src} />
      </Head>
      <ToastContainer />
      <General isMob={props.isMob}>
        <Component {...pageProps} />
      </General>
    </Provider>
  );
};

init.getInitialProps = async (context: AppContext) => {
  const { req } = context.ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const isMob = isMobile(userAgent);
  const props = await App.getInitialProps(context);

  return { ...props, isMob };
};

export default init;
