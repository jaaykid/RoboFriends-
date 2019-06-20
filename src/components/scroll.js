import React from 'react'
import { directive } from '@babel/types';



const Scroll = (props) => {
  return (
  <div style ={{overflowY: 'scroll', border: '1px solid black', height:'500px' }}>
      {props.children}
  </div>
  )
}


export default Scroll  