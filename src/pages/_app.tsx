import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { IntlProviderWrapper } from '../intl/IntlContext';
import MainLayout from '../components/layouts/MainLayout';

const App: any = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();

  return (
    <IntlProviderWrapper injectedLocale={locale}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </IntlProviderWrapper>
  );
};

export default App;

