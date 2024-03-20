import React from 'react'

interface Props {
  val: string;
}

const Tab = ({ val }: Props) => {
  return (
    <div  >{val}</div>
  )
}

export default Tab