import React from 'react'
import {Bookmark} from "lucide-react"

function Card(props) {
  return (
    <div className="card">
        <div className="top">
            <img src={props.logo} alt="" />
            <button className='btn'>save <Bookmark size={13}/></button>
        </div>
        <div className="center">
        <h3>{props.company} <span>{props.time}</span></h3>
        <h2>{props.title}</h2>
        <div>
            <button className='btn1'>{props.type}</button>
            <button className='btn2'>{props.level}</button>
        </div>
        </div>
       
        <div className="bottom">
            <p>{props.salary} </p>
            <div className='btn3'>
                <span>{props.location} </span>
            <button> Apply Now</button></div>
        </div>
        
        
    </div>
    
  )
}

export default Card