import React from "react";
import styled from "styled-components";

export const Stack = styled.div((props) => ({
  display: "flex",
  flexDirection: props?.direction ? props?.direction : "row",
  alignContent: props?.alignContent ? props?.alignContent : "flex-start",
  alignItems: props?.alignItems ? props?.alignItems : "flex-start",
  justifyContent: props?.justifyContent ? props?.justifyContent : "flex-start",
  gap: props?.gap
    ? typeof props?.gap === "number"
      ? `${props?.gap * 4}px`
      : props?.gap
    : "0px",
  ...(props?.sx || {}),
}));
