import React from 'react'

function Box(props){
    return(
        <>
            <div className="resume-item">
              <h4>{props.title}</h4>
              <h5>{props.duration}</h5>
              <p><em>{props.location}</em></p>
              <p>{props.desc1}</p>
            </div>
        </>
    )
}

export default function Resume() {
  return (
    <div>
        
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Resume</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div className="row">
          <div className="col-lg-6">

            <h3 className="resume-title">Education</h3>
            <Box title="Bachelor of Technology" duration="2020 - 2024" location="Guru Tegh Bahadur Institute of Technology, India" desc1="Pursuing a degree in Information Technology with a current GPA of 9.8." />

            <Box title="12th" duration="2018 - 2020" location="N.C. Jindal Public School, India" desc1="Non-Medical Science with Passing Percentage of 92% in CBSE Board." />

            <Box title="10th" duration="2006 - 2018" location="N.C. Jindal Public School, India" desc1="A Percentage of 87% in CBSE Board." />
    
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Software Developer Intern</h4>
              {/* <h5>2019 - Present</h5> */}
              <p><em>Monkhood Living, India </em></p>
              <ul>
                <li>Lead in the development and implementation of graphic, layout, and production communication material</li>
                <li>Done API Development in MERN (Mongodb, ExpressJs, ReactJs and NodeJS) with Cron operations and authentication routing. </li>
                <li>Developed Frontend in ReactJs and Tailwind CSS</li>
                <li>Did several operations on AWS (Amazon Web Services) Console.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Full-Stack Developer</h4>
              {/* <h5>2017 - 2018</h5> */}
              <p><em>Infobility, Canada</em></p>
              <ul>
                <li>Developed and maintained company's Website</li>
                <li>Deployed Websites on AWS (Amazon Web Services) Console</li>
                <li>Added Several features on the backend part such as mailing, etc.</li>
                <li>Developed Websites on ReactJs, NodeJs, NextJs, ExpressJs, etc.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>

    </div>
  )
}
