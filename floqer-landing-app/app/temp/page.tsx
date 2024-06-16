import React from 'react'
import Head from 'next/head';

const page = () => {
  return (
    <>
      <Head>
        <title>Floqer | Terms of Service</title>
        <meta name="description" content="Floqer's Terms of Service" />
      </Head>
      <div  className='h-screen w-screen bg-gradient-to-br from-[#d8dbf9] from-[5%] via-[#ded7fc] via-[30%] via-[#fbebee] via-20% to-[#ffffff]'
      >
        <div className='bg-gradient-to-tr from-[#FFFFFF] via-[#f4b7e2] via-[60%] to-[#dedcfc] absolute top-0 right-0 h-[80vh] w-[40vw] opacity-10 blur-lg'  />

      </div>
    </>
  )
}

export default page