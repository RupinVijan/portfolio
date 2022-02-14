import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Card(){
    return(
        <>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="https://i.pinimg.com/236x/96/38/6e/96386e2cd3d4ee9470861bdd9bf8d102.jpg" className="testimonial-img" alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
        </>
    )
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

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
         <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      autoPlaySpeed={4000}
    >
        <Card/><Card/>
        <Card/><Card/>
    </Carousel>
</div></div></section>
    </>
  )
}
