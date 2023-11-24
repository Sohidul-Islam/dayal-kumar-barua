import React, { Component, useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";

import Navbar from "../../component/Navbar";
import Feature from "../../component/Feature";
import Pricing from "../../component/Pricing";
import Review from "../../component/Review";
import News from "../../component/News";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer";

import image1 from "../../assets/images/images/1692718795704.jpg";
import image2 from "../../assets/images/images/image_1.jpg";
import image3 from "../../assets/images/images/image_2.jpg";
import image4 from "../../assets/images/images/image_3.jpg";
import image5 from "../../assets/images/images/image_4.jpg";
// import TinySlider from "tiny-slider-react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SliderCard from "./SliderCard";
import PersonalDescriptionCard from "../personal/PersonalDescriptionCard";
import PersonalInformation from "../personal";

/**
 * Marketing component
 */

export default function Marketing() {
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

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
      <div style={{ marginTop: "70px" }}>
        <Navbar />

        <Slide
          ref={sliderRef}
          onChange={(from, to) => {
            setActiveIndex(to);
          }}
        >
          {carouselData.map((slideImage, index) => (
            <SliderCard
              sliderRef={sliderRef}
              key={index}
              slideData={slideImage}
              isActive={index === activeIndex}
            />
          ))}
        </Slide>

        <PersonalInformation />

        {/* <Feature />
        <Pricing />
        <Review />
        <News />
        <Contact /> */}
        <Footer />
      </div>
    </>
  );
}
