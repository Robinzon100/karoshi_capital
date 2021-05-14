import type { AppProps } from "next/app";

import "../styles/main.scss";
import HeadAndMeta from "components/global/headAndMeta/HeadAndMeta";
import Navigation from 'components/global/navigation/Navigation';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <HeadAndMeta
        title="Karoshi Capital"
        description="We find, invest in, and incubate the newest and most cutting-edge crypto startups."
        favIconImagePath="/svg/logo.svg"
        baseUrl="https://karoshi-capital.vercel.app"
        ogTitle="💠Karoshi Capital"
        ogDescription="We find, invest in, and incubate the newest and most cutting-edge crypto startups."
        ogImagePath="/images/og.png"
      />



      <Navigation />
      <Component {...pageProps} />



      <style global jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          
          body{
            font-family: 'Mulish';
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
