import { SessionProvider } from 'next-auth/react';
import GlobalStyles from '../src/global/styles';

// import type { AppProps } from 'next/app';
// import GlobalStyles from '../src/global/styles';

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
