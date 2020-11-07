import React from 'react'
import './index.css'
import link from '../../recursos/back-arrow.svg'
const card = (props) =>{
    const {img, title, text, firma, more} = props
    return(
        <>
        <div className="card">            
        <img alt="imagen1" src = {img}></img>
        <h1><b>{title}</b></h1>
        <span>By: {firma}</span>
        <h4>{text}</h4>
        <a href={more}>More information... <img alt="img" src={link}></img></a>
        </div>
        
        </>
    )
}

export default card