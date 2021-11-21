import React from 'react'

export default function sicon(props) {
    return (
        <div>
        <div key={props.item} className="icon">
        <span className={props.item}><span/></span>
      </div>
        </div>
    )
}
