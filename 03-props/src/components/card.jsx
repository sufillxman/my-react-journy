import React from 'react'

function card(props) {
  return (
     <div className="card">
          <h2>{props.username}</h2>
          <img src={props.img} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ipsum?</p>
          <button>click</button>
        </div>
  )
}

export default card