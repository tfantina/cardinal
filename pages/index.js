import Head from 'next/head'
import Image from 'next/image'
import BasicGrid from '../components/grid'
import GridOrder from '../components/grid_order'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='section'>
        <BasicGrid />
      </div>

      <div className='section'>
        <GridOrder />
      </div>
    </div>
  )
}
