import React from 'react'

interface Props {
  val: string;
  link: string;
}

const Tab = ({ val, link }: Props) => {
  return (
    <a href={link} className='text-[#6B7280]' >{val}</a>
  )
}

export default Tab