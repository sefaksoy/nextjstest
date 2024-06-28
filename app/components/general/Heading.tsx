
interface HeadingProps{
    center?: boolean
    text: string
}
import React from 'react'

const Heading:React.FC<HeadingProps> = ({center,text}) => {
  return (
    <div className={`text-slate-500 my-3 md:my-10 px-3 md:px-10 md:text-xlx ${center ? "text-center" : "text-start"}`}>{text}</div>
  )
}

export default Heading