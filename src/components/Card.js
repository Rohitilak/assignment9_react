import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
       <div className='cards' >
       {/* <img src={props.img} id="img"></img> */}
        {/* <h3>{props.value}</h3> */}
        <img src={props.imgurl} id="img"></img>
        <h3 className='para'>{props.name}</h3>
       </div>
  )
}

export default Card;
