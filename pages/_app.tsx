import { UserContextProvider } from '../src/contexts/user';

// import type { AppProps } from 'next/app';
// import GlobalStyles from '../src/global/styles';

function MyApp({ Component, pageProps }: any) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
