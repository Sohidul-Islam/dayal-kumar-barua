import React, { useState } from "react";
import styled from "styled-components";

const StyledHeaderContainer = styled.div((props) => ({
  backgroundImage: `url(${props.backgroundImage})`,
  backgroundPosition: "center top",
  backgroundRepeat: "no-repeat",
  backgroundSize: props?.aspectRatio > 1 ? "cover" : "contain",
  "@media (max-width: 768px)": {
    backgroundSize: props?.aspectRatio > 1 ? "cover" : "contain",
  },
  "@media (max-width: 480px)": {
    backgroundSize: "cover",
  },
}));

const StyledContainer = styled.div({
  width: "100%",
  height: "auto",
  bottom: "80px",
  position: "absolute",
  "@media (max-width: 768px)": {
    bottom: "40px",
  },
  "@media (max-width: 480px)": {
    bottom: "30px",
  },
});

const StyledInnerContainer = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  gap: "8px",
});

const StyledInnerTitleBox = styled.div(({ isActive }) => ({
  display: "inline-block",
  maxWidth: "350px",
  borderRadius: "32px",
  fontSize: "8px",
  padding: "8px 20px",
  background: "#8cb369",
  color: "#ffffff",
  textAlign: "center",
  opacity: `${isActive ? "1" : "0"}`, // Apply translation based on isActive
  transform: `translateX(${isActive ? "0%" : "120%"})`, // Apply translation based on isActive
  transition: "all 0.8s linear",
  // Responsive styles using media queries

  "@media (max-width: 768px)": {
    padding: "4px 8px",
  },
  "@media (max-width: 480px)": {
    padding: "4px 8px",
  },
}));

const StyledInnerSubTitleBox = styled.div(({ isActive }) => ({
  display: "inline-block",
  maxWidth: "350px",
  borderRadius: "32px",
  padding: "4px 20px",
  background: "#6666FF",
  color: "#ffffff",
  textAlign: "center",
  opacity: `${isActive ? "1" : "0"}`, // Apply translation based on isActive
  transform: `translateX(${isActive ? "0%" : "120%"})`, // Apply translation based on isActive
  transition: "all 0.8s linear",
  // Responsive styles using media queries
  "@media (max-width: 768px)": {
    padding: "4px 8px",
  },
  "@media (max-width: 480px)": {
    padding: "4px 8px",
  },
}));

const StyledTitle = styled.p({
  textTransform: "capitalize",
  margin: "0px",
  padding: "0px",
  fontSize: "1.25rem",
  lineHeight: "1.8rem",
  fontWeight: "600",
  "@media (max-width: 768px)": {
    fontSize: "0.8rem",
    lineHeight: "0.8rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.7rem",
    lineHeight: "0.7rem",
  },
});

const StyledSubTitle = styled.p({
  textTransform: "capitalize",
  margin: "0px",
  padding: "0px",
  fontSize: "1.25rem",
  lineHeight: "1.8rem",
  fontWeight: "600",

  "@media (max-width: 768px)": {
    fontSize: "0.7rem",
    lineHeight: "0.7rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.6rem",
    lineHeight: "0.6rem",
  },
});

function getImageDimensions(url, callback) {
  const img = new Image();
  let dimensions = {};
  img.onload = function () {
    dimensions = {
      width: img?.width,
      height: img?.height,
    };

    const aspectRatio = dimensions?.width / dimensions?.height;

    callback(aspectRatio);

    // Call the callback function with the dimensions
  };

  img.src = url;
}

function SliderCard({ slideData, isActive, sliderRef }) {
  const [ratio, setRatio] = useState(1);

  getImageDimensions(slideData?.profile, (value) => setRatio(value));

  return (
    <div style={{ background: "#fff" }}>
      <StyledHeaderContainer
        className="header-carousel-container m-1"
        backgroundImage={slideData?.profile}
        aspectRatio={ratio}
      >
        <StyledContainer>
          <StyledInnerContainer>
            <StyledInnerTitleBox
              className="transitionOn transitionOf"
              isActive={isActive}
            >
              <StyledTitle>{slideData?.title}</StyledTitle>
            </StyledInnerTitleBox>

            {/* sub title */}
            <StyledInnerSubTitleBox
              className="transitionOn transitionOf"
              isActive={isActive}
            >
              <StyledSubTitle>{slideData?.designation}</StyledSubTitle>
            </StyledInnerSubTitleBox>
          </StyledInnerContainer>
        </StyledContainer>
      </StyledHeaderContainer>
    </div>
  );
}

export default SliderCard;
