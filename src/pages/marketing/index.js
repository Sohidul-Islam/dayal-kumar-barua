import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import Navbar from "../../component/Navbar";
import Feature from "../../component/Feature";
import Pricing from "../../component/Pricing";
import Review from "../../component/Review";
import News from "../../component/News";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer";

import image1 from "../../assets/images/images/1692718795704.jpg";
import image2 from "../../assets/images/images/Dayal_kumar_Barua-removebg-preview (1).png";
import image3 from "../../assets/images/images/WhatsApp Image 2023-06-12 at 14.16.17 (1).jpeg";
import image4 from "../../assets/images/images/dayal Kumar.jpg";
import image5 from "../../assets/images/images/WhatsApp Image 2023-06-12 at 14.16.23.jpeg";
// import TinySlider from "tiny-slider-react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  // height: "400px",
};

// const settings = {
//   controls: true,
//   mouseDrag: true,
//   loop: true,
//   rewind: true,
//   autoplay: true,
//   autoplayButtonOutput: false,
//   autoplayTimeout: 3000,
//   navPosition: "bottom",
//   speed: 400,
//   responsive: {
//     992: {
//       items: 1,
//     },

//     767: {
//       items: 1,
//     },

//     320: {
//       items: 1,
//     },
//   },
// };

/**
 * Marketing component
 */

export default function Marketing() {
  const carouselData = [
    {
      id: "1",
      profile: image1,
      title: "Calvin Carlo",
      designation: "Manager",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
    {
      id: "2",
      profile: image2,
      title: "Christa Smith",
      designation: "Manager",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
    {
      id: "3",
      profile: image3,
      title: "Jemina CLone",
      designation: "Manager",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
    {
      id: "4",
      profile: image4,
      title: "Smith Vodka",
      designation: "Manager",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
    {
      id: "5",
      profile: image5,
      title: "Cristino Murfi",
      designation: "Manager",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
  ];

  return (
    <>
      <div>
        <Navbar />

        {/* <div>
          <TinySlider settings={settings} className="tiny-slide">
            {carouselData.map((el, index) => (
              <div className="header-carousel-container m-1" key={index}>
                <div className="header-carousel-img--container">
                  <img src={el.profile} className=" shadow" alt="" />
                </div>
              </div>
            ))}
          </TinySlider>
        </div> */}

        <Slide
        // prevArrow={<button className="btn btn-outline-primary">Prev</button>}
        // nextArrow={<button className="btn btn-outline-primary">Next</button>}
        >
          {carouselData.map((slideImage, index) => (
            <div
              key={index}
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.profile})`,
              }}
            >
              <div
                className="header-carousel-container m-1"
                key={index}
                // style={{ backgroundImage: `url(${slideImage?.profile})` }}
              >
                <div className="header-carousel-img--container">
                  <img src={slideImage.profile} className=" shadow" alt="" />
                </div>
              </div>
            </div>
          ))}
        </Slide>

        {/* Partners start */}
        {/* <section className="mt-5 pt-md-5">
                    <Container>
                        <Row className="row justify-content-center">
                            <Col lg={2} md={2} className="col-6 text-center py-4 py-sm-0">
                                <img src={AmazonImage} className="avatar avatar-ex-sm" alt="" />
                            </Col>

                            <Col lg={2} md={2} className="col-6 text-center py-4 py-sm-0">
                                <img src={GoogleImage} className="avatar avatar-ex-sm" alt="" />
                            </Col>

                            <Col lg={2} md={2} className="col-6 text-center py-4 py-sm-0">
                                <img src={LenovoImage} className="avatar avatar-ex-sm" alt="" />
                            </Col>

                            <Col lg={2} md={2} className="col-6 text-center py-4 py-sm-0">
                                <img src={PaypalImage} className="avatar avatar-ex-sm" alt="" />
                            </Col>

                            <Col lg={2} md={2} className="col-6 text-center py-4 py-sm-0">
                                <img src={ShopifyImage} className="avatar avatar-ex-sm" alt="" />
                            </Col>

                            <Col lg={2} md={2} className="col-6 text-center py-4 py-sm-0">
                                <img src={SpotifyImage} className="avatar avatar-ex-sm" alt="" />
                            </Col>
                        </Row>
                    </Container>
                </section> */}

        <Feature />
        <Pricing />
        <Review />
        <News />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
