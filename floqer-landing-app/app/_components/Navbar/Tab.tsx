import React from 'react'

interface Props {
  val: string;
  link: string;
}

const Tab = ({ val, link }: Props) => {
  return (
    <a href={link} >{val}</a>
  )
}

export default Tab