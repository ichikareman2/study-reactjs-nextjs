import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col'>
        <Link href={'./insta'}>Insta</Link>
        <Link href={'./checklist'}>Checklist</Link>
        <Link href={'./calculator'}>Calculator</Link>
      </div>
    </Layout>
  )
}

export default Home
