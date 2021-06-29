import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { IntlContext } from '../../intl/IntlContext';
import useTranslation from '../../intl/useTranslation';

interface Props {
  children?: any;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const { locale } = useContext(IntlContext);
  const router = useRouter();

  return (
    <>
      <Head>
        <meta httpEquiv='Content-Language' content={locale} />
        <meta name='description' content={useTranslation('metaDescription')} />
        <link rel='icon' type='image/x-icon' href='/favicon.png' />
      </Head>

      <main>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
