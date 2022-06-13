import Head from 'next/head';
import Intro from '../components/intro';
import Services from '../components/Services'
import { data } from '../data';




export default function Home({services}) {
  return (
    <div>
      <Head>
        <title>RELEVANT</title>
        <meta name="description" content="Test1!" />
      </Head> 
      <Intro />
      <Services services={services} />
      </div>
  );
}


export const getStaticProps = () => {
  const services = data;
  return {
    props: {
      services
    },
  };
}
