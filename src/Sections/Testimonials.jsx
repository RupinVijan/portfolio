import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Amit from "../img/testimonials/amituvah.jfif";
import Rahul from "../img/testimonials/rahul.jfif";
import Muskan from "../img/testimonials/muskan.jpeg";

function Card(props) {
  return (
    <>
      <div className="swiper-slide">
        <div className="testimonial-item">
          <img src={props.img} alt="" className="testimonial-img" />
          <h3>{props.name}</h3>
          <a href={props.link}>
            <h4>{props.company}</h4>
          </a>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            {props.desc}
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>
    </>
  );
}

export default function Testimonials() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>

          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              autoPlaySpeed={4000}
            >
              <Card
                name="Rahul Chawla"
                img={Rahul}
                link="https://monkhood.in"
                company="Monkhood"
                desc="Rupin is a talented web developer. React.js, Node.js, and AWS are his areas of expertise. He has worked with us on our projects and his dedication and commitment deserve appreciation. His website is well put together and was live within the given deadline. He showed active participation, a willingness to do things on time, and a sense of diligence. His problem-solving abilities are outstanding and he is a fast learner. The recommendation of Rupin is highly regarded."
              />

              <Card
                name="Muskan Khatri"
                img={Muskan}
                link="https://infobility.ca"
                company="Infobility"
                desc="I've worked alongside Rupin for couple of months now. In this time, I have seen him not only excel in the core elements of his job as a Web Developer - but also learn other tasks that extend well beyond the scope for our business, like developing websites with React, next.js, node.js. Rupin possess the rare mix of productivity and ambition that sets a great example for the rest of the team."
              />
              <Card
                name="Amit Prajapati"
                img={Amit}
                link="https://uvahcare.in"
                company="Uvahcare"
                desc="I am extremely pleased to recommend Rupin . Rupin is a highly skilled web developer. He is highly skilled in react.js , node.js and aws .
He worked with me on a project and his dedication, commitment is amazing.
Our website receive significant audiences.
He is a fast problem solver and fast learner and quality developer."
              />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
