import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function PerSkill(props){
  return(
    <>
            <div className="progress">
              <span className="skill">{props.name} <i className="val">{props.perc}%</i></span>
              <div className="progress-bar-wrap">
              <ProgressBar completed={props.perc} bgColor={props.color}/>
              </div>
            </div>
    </>
  )
}

export default function Skill() {
  return (
    <>
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Skills</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div className="row skills-content">

          <div className="col-lg-6">
            <PerSkill name="HTML-CSS-JAVASCRIPT" perc="90" color="#0678e3" />
            <PerSkill name="REACTJS-NEXTJS" perc="85"  color="green"/>
            <PerSkill name="MONGODB" perc="80" color="#0678e3"/>
            <PerSkill name="SQL AND POSTGRE" perc="60" color="green" />
          </div>

          <div className="col-lg-6">
          <PerSkill name="AMAZON WEB SERVICES" perc="75" color="green"/>
            <PerSkill name="NODE-EXPRESSJS" perc="90" color="#0678e3"/>
            <PerSkill name="PYTHON" perc="75" color="green"/>
            <PerSkill name="DATA STRUCTURES" perc="60" color="#0678e3"/>
          </div>

        </div>

      </div>
    </section>

    </>
  )
}
