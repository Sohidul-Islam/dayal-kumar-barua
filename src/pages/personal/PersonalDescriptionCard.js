/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { Container } from "reactstrap";
import { Grid, Stack } from "@mui/material";
import { motion, easeIn } from "framer-motion";

const StyledTitleBox = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  alignContent: "center",
  alignItems: "center",
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
  idName,
}) {
  return (
    <Container id={idName}>
      {!right ? (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
            >
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
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <StyledTitleBox>
              <Stack
                direction="column"
                sx={{
                  gap: { xs: 1, md: 1.5, lg: 2.5 },
                  justifyContent: "space-around",
                }}
              >
                {title && (
                  <motion.div
                    whileHover={{ scale: 1.1, x: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <StyledTitle
                      sx={{
                        fontSize: "1.6rem",
                        paddingBottom: "2px",
                        borderBottom: "2px solid rgba(0,0,0,0.0)",
                        cursor: "default",
                        transition: "all 0.5s ease-in-out",
                      }}
                    >
                      {title}
                    </StyledTitle>
                  </motion.div>
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
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <StyledTitleBox>
              <Stack
                direction="column"
                sx={{
                  gap: { xs: 1, md: 1.5, lg: 2.5 },
                }}
              >
                {title && (
                  <motion.div
                    whileHover={{ scale: 1.1, x: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <StyledTitle
                      sx={{
                        fontSize: "1.6rem",
                        paddingBottom: "2px",
                        borderBottom: "2px solid rgba(0,0,0,0.0)",
                        cursor: "default",
                        transition: "all 0.5s ease-in-out",
                      }}
                    >
                      {title}
                    </StyledTitle>
                  </motion.div>
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
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
            >
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
            </motion.div>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default PersonalDescriptionCard;
