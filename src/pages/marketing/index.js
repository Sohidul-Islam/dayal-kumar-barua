/* eslint-disable no-unused-vars */
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
import image6 from "../../assets/images/images/banner.jpg";
// import TinySlider from "tiny-slider-react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SliderCard from "./SliderCard";
import PersonalDescriptionCard from "../personal/PersonalDescriptionCard";
import PersonalInformation from "../personal";
import Events from "../event";
import { Box, Stack, Tabs, Typography } from "@mui/material";
import styled from "styled-components";
import { Height } from "@mui/icons-material";
import { about } from "../personal/helpers";
import TitledContainer from "../../component/Shared/TitleContainer";
import LayoutWithTransparentBanner from "../../component/Shared/LayoutWithTransparentBanner";
import ContentForTransparentBanner from "../../component/Shared/ContentForTransparentBanner";

/**
 * Marketing component
 */

const StyledDot = styled.div((props) => {
  return {
    width: "4px",
    height: "4px",
    borderRadius: "2px",
    background: "red",
  };
});

export default function Home() {
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselData = [
    {
      id: "1",
      profile: image1,
      title: "রংপুর ",
      designation: "সেনাবাহিনীঃ ৩ লক্ষ [ রিজার্ভ সহ ]",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
    {
      id: "2",
      profile: image2,
      title: "সিলেট  ",
      designation: "সেনাবাহিনীঃ ৩ লক্ষ [ রিজার্ভ সহ ]",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
    {
      id: "3",
      profile: image3,
      title: "বরিশাল",
      designation: "সেনাবাহিনীঃ ৩ লক্ষ [ রিজার্ভ সহ ]",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
    {
      id: "4",
      profile: image4,
      title: "রাজশাহী",
      designation: "সেনাবাহিনীঃ ৩ লক্ষ [ রিজার্ভ সহ ]",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
    {
      id: "5",
      profile: image5,
      title: "খুলনা",
      designation: "সেনাবাহিনীঃ ৩ লক্ষ [ রিজার্ভ সহ ]",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
    {
      id: "5",
      profile: image6,
      title: "ঢাকা ",
      designation: "সেনাবাহিনীঃ ৩ লক্ষ [ রিজার্ভ সহ ]",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
  ];

  const indicators = (index) => <Stack className="indicator"></Stack>;

  return (
    <>
      <div style={{ marginTop: "60px" }}>
        {/* <Navbar /> */}

        <Stack id="home">
          <Box sx={{ background: "#fff" }}>
            <Slide
              ref={sliderRef}
              onChange={(_, to) => {
                setActiveIndex(to);
              }}
              indicators={indicators}
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
          </Box>

          <TitledContainer title={"About"}>
            <PersonalDescriptionCard
              idName={"about"}
              right={true}
              title={about?.title}
              subtitle={about?.subtitle}
              description={about?.description}
              image={about?.image}
            />
          </TitledContainer>

          <LayoutWithTransparentBanner>
            <ContentForTransparentBanner />
          </LayoutWithTransparentBanner>

          <TitledContainer title={"Event"}>
            <Events />
          </TitledContainer>

          <LayoutWithTransparentBanner>
            <ContentForTransparentBanner />
          </LayoutWithTransparentBanner>

          <Footer />
        </Stack>
      </div>
    </>
  );
}
