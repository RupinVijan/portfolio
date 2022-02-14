import React from 'react'
import pro_monkhood from "../img/projects/project-monkhood.png"
import pro_uvahcare from "../img/projects/project-uvahcare.png"
import pro_dsc from "../img/projects/projects-dsc.png"
import pro_infobility from "../img/projects/project-infobility.png"
import pro_social from "../img/projects/project-social.png"
import pro_hand from "../img/projects/sampleoutput.png"

function Project(props){
    return(
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-blue">
              <div className="icon">
                <img src={props.img} alt="" />
              </div>
              <h4><a href={props.url} target="_blank">{props.title}</a></h4>
              <p>{props.desc}</p>
            </div>
          </div>
    );
}

export default function Projects() {
  return (
    <>
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Projects</h2>
        </div>

        <div className="row">
            
            <Project img={pro_monkhood} url="https://monkhood.in" title="Monkhood Website" desc="Made this Website using Mongodb, ExpressJs, ReactJs & NodeJs" />
            <Project img={pro_infobility} url="https://infobility.ca" title="Infobility Website" desc="Made this Website Using NextJs and ReactJs and hosted on AWS Console." />
            <Project img={pro_uvahcare} url="https://uvahcare.in" title="Uvahcare Website" desc="Made this Website using Mongodb,NodeJs and ExpressJs " />
            <Project img={pro_dsc} url="https://dsc.gtbit.org" title="GDSC GTBIT Website" desc="Made this Website Using ReactJs and Redux" />
            <Project img={pro_hand} url="https://github.com/RupinVijan/text-to-handwriting" title="Text to Handwriting" desc="Made this Website using Python and its libraries!" />
            <Project img={pro_social} url="https://github.com/RupinVijan/The-Social-Gamer" title="Social Media Website" desc="Made this Website Mongodb, ExpressJs, ReactJs & NodeJs" />



        </div>

      </div>
    </section>

    </>
  )
}
