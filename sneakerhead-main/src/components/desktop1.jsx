import React from 'react'
import myImage from '../components/b1_shoe.png'
import { Helmet } from 'react-helmet'

import './desktop1.css'
const b1={
  border: '5px solid black' ,
  padding: '10px' ,
  borderRadius: '10px',
  display:'flex',
  flexDirection:'column',
  width:"90%",
  height:"800px",
  justifyContent:'center',
  alignSelf:'center',
  marginTop:'180px',
  backgroundColor:'#E7A7B8',
}
const Desktop1 = (props) => {
  return (
    <div className="desktop1-container">
      <div className="desktop1-desktop1" style={b1}>
        <img
          src={myImage}
          alt='Rectangle123'
          className="desktop1-rectangle1"
        />
        <span className="desktop1-text10">
          <span>LATEST COLLECTION</span>
          <br></br>
          <span>CHECKOUT NOW</span>
        </span>
      </div>
    </div>
  )
}

export default Desktop1
