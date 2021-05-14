import Hero from 'components/pages/landing/Hero';
import Infos from 'components/pages/landing/Infos';
import Services from 'components/pages/landing/Services';
import Portfolio from 'components/pages/landing/Portfolio';

const index = () => {
  return (
    <>
      <Hero />
      <Infos />
      <Services />
      <Portfolio />
    </>
  );
};

export default index;
