import React from 'react';

import useTranslation from '../intl/useTranslation';

const Home: React.FC = () => {
  return (
    <div>
      {useTranslation('language')}
    </div>
  );
};

export default Home;
