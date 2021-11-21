import React from 'react'
import Sicon from './Sicon'

export default function Pro(props) {
    return (
        <div>
            <div className="col m4">
        <div className="card hoverable">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator tru"
              src={props.img}
              alt=""
            />
          </div>
          <div className="card-content">
            <div></div>
            <span className="card-title activator grey-text text-darken-4">
              {props.name}
              <i className="material-icons right"></i>
            </span>
            {props.tech.map((e)=>{
                return(

                    <Sicon item={e} />
                )
            })}
            <div>
              <span>
                <a href={props.web}>Website</a>
              </span>
              <span>
                <a className="github" href={props.git}>
                  Github
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
