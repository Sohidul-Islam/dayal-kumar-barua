import { Box, Stack } from "@mui/material";
import React from "react";

import image1 from "../../assets/images/images/banner.jpg";
import { motion } from "framer-motion";

function LayoutWithTransparentBanner({ children }) {
  return (
    <Stack sx={{ position: "relative" }}>
      <Stack
        sx={{
          minHeight: "min(650px,60vh)",
          background: "rgba(0,0,0,0.15)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        {children}
      </Stack>

      <Box
        width={"100vw"}
        height={"100vh"}
        sx={{
          position: "fixed",
          left: "0px",
          top: "0px",
          backgroundImage: `url(${image1})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          zIndex: -1,
        }}
      />
    </Stack>
  );
}

export default LayoutWithTransparentBanner;
