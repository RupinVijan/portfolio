import React from 'react'

export default function Prok(props) {
    return (
        <div>
            <div class="property-card">
    <a href={props.git} target="_blank">
      <div class="property-image" style={{backgroundImage : "url(" + props.img +")"}}>
        
      </div></a>
    <div class="property-description" style={{color:"black"}}>
      <h5> {props.name}  </h5>
      <p>{props.desc}</p>
    </div>
    
  </div>
        </div>
    )
}
