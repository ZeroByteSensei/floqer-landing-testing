import React from 'react'
import Tab from './Tab'

const Tabs = () => {
  return (
    <section className='flex flex-1 items-center justify-between gap-2 flex-col sm:flex-row' >
      <Tab  val='Product' />
      <Tab  val='Explore' />
      <Tab  val='FAQs' />
      <Tab  val='Pricing' />
    </section>
  )
}

export default Tabs