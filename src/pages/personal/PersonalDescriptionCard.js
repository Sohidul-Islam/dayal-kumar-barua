import React from "react";
import styled from "styled-components";

import { Stack } from "../../component/Shared/Common";
import { Container } from "reactstrap";

const StyledInnerContainer = styled.div({
  width: "50%",
});

const StyledTitleBox = styled.div({
  width: "100%",
  padding: "0px 10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
});

const StyledTitle = styled.p((props) => ({
  textTransform: "capitalize",
  margin: "0px",
  padding: "0px",
  fontSize: "1.25rem",
  lineHeight: "1.8rem",
  fontWeight: "600",
  transition: "all 0.5s linear",
  "@media (max-width: 768px)": {
    fontSize: "0.8rem",
    lineHeight: "0.8rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.7rem",
    lineHeight: "0.7rem",
  },
  ...(props?.sx || {}),
}));

function PersonalDescriptionCard({
  right = true,
  title,
  subtitle,
  description,
  image = "",
}) {
  return (
    <Container>
      {!right ? (
        <Stack sx={{ margin: "80px 0px" }} alignItems="center" gap={6}>
          {/* left */}
          {image && (
            <StyledInnerContainer>
              <img
                src={image}
                alt={"image_text"}
                style={{
                  width: "100%",
                  maxWidth: "590px",
                  maxHeight: "590px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </StyledInnerContainer>
          )}

          {/* Right */}
          <StyledInnerContainer>
            <StyledTitleBox>
              <Stack direction="column" gap={2.5}>
                {title && (
                  <StyledTitle
                    sx={{
                      fontSize: "1.6rem",
                      paddingBottom: "2px",
                      borderBottom: "2px solid rgba(0,0,0,0.0)",
                      cursor: "default",
                      transition: "all 0.5s ease-in-out",
                      "&:hover": {
                        borderBottom: "2px solid rgba(0,0,0,1.0)",
                      },
                    }}
                  >
                    {title}
                  </StyledTitle>
                )}

                <Stack direction="column">
                  {subtitle && (
                    <StyledTitle
                      sx={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {subtitle}
                    </StyledTitle>
                  )}
                  {description && (
                    <StyledTitle
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: "400",
                        "@media (max-width: 768px)": {
                          fontSize: "0.6rem",
                          lineHeight: "0.7rem",
                        },
                        "@media (max-width: 480px)": {
                          fontSize: "0.5rem",
                          lineHeight: "0.6rem",
                        },
                      }}
                    >
                      {description}
                    </StyledTitle>
                  )}
                </Stack>
              </Stack>
            </StyledTitleBox>
          </StyledInnerContainer>
        </Stack>
      ) : (
        <Stack sx={{ margin: "80px 0px" }} alignItems="center" gap={6}>
          {/* left */}
          <StyledInnerContainer>
            <StyledTitleBox>
              <Stack direction="column" gap={2.5}>
                {title && (
                  <StyledTitle
                    sx={{
                      fontSize: "1.6rem",
                      paddingBottom: "2px",
                      borderBottom: "2px solid rgba(0,0,0,0.0)",
                      cursor: "default",
                      transition: "all 0.5s ease-in-out",
                      "&:hover": {
                        borderBottom: "2px solid rgba(0,0,0,1.0)",
                      },
                    }}
                  >
                    {title}
                  </StyledTitle>
                )}

                <Stack direction="column">
                  {subtitle && (
                    <StyledTitle
                      sx={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {subtitle}
                    </StyledTitle>
                  )}
                  {description && (
                    <StyledTitle
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: "400",
                        "@media (max-width: 768px)": {
                          fontSize: "0.6rem",
                          lineHeight: "0.7rem",
                        },
                        "@media (max-width: 480px)": {
                          fontSize: "0.5rem",
                          lineHeight: "0.6rem",
                        },
                      }}
                    >
                      {description}
                    </StyledTitle>
                  )}
                </Stack>
              </Stack>
            </StyledTitleBox>
          </StyledInnerContainer>
          {/* right */}
          {image && (
            <StyledInnerContainer>
              <img
                src={image}
                alt={"image_text"}
                style={{
                  width: "100%",
                  maxWidth: "590px",
                  maxHeight: "590px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </StyledInnerContainer>
          )}
        </Stack>
      )}
    </Container>
  );
}

export default PersonalDescriptionCard;
