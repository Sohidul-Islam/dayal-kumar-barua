import { Stack, Typography } from "@mui/material";
import React from "react";

function TitledContainer({ title, sx, children }) {
  return (
    <Stack gap={3.5} py={7.5} sx={{ background: "#fff" }}>
      <Stack
        direction={"row"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Typography variant="h4" sx={{ ...(sx || {}) }}>
          {title}
        </Typography>
      </Stack>
      {children}
    </Stack>
  );
}

export default TitledContainer;
