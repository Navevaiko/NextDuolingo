import Head from 'next/head';
import CustomHeader from '../components/header/header'
import Menu from '../components/menu/menu';
import Ranking from '../components/ranking/ranking';

export default function Home() {
  return (
    <>
      <Head>
        <title> Duolingo - NextJS </title>
      </Head>
      
      <CustomHeader />
      <Menu />
      <Ranking />
    </>
  )
}
