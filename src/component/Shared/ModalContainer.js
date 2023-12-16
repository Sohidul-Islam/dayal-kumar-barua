import { Close } from "@mui/icons-material";
import { IconButton, Paper, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import { motion } from "framer-motion";

function ModalContainer({ title, onClose, children }) {
  const constraintsRef = useRef(null);
  return (
    <motion.div
      ref={constraintsRef}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Paper
        sx={{
          position: "absolute",
          width: {
            xs: "min(96vw,600px)",
            md: "min(80vw,650px)",
            lg: "min(80vw,850px)",
          },
          height: {
            xs: "min(80vh,650vw)",
            md: "min(80vh,650px)",
            lg: "min(80vh,750px)",
          },
          top: `${50}%`,
          left: `${50}%`,
          transform: `translate(-${50}%, -${50}%)`,
          paddingLeft: { xs: 2, md: 2.5, lg: 4.5 },
          paddingRight: { xs: 2, md: 2.5, lg: 4.5 },
          // paddingBottom: { xs: 2, md: 2.5, lg: 4.5 },
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "2px",
            background: "#F5F5F5",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#8cb369",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);

            backgroundColor: "#F5F5F5",
          },
        }}
      >
        <Stack gap={2.5}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              position: "sticky",
              zIndex: 999,
              top: -2,
              background: "#ffff",
              paddingTop: { xs: 2, md: 2.5, lg: 4.5 },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                padding: 0,
                margin: 0,
                fontSize: { sm: 14, md: 16, lg: 24 },
              }}
            >
              {title}
            </Typography>
            <IconButton size="small" onClick={onClose}>
              <Close />
            </IconButton>
          </Stack>

          <Stack>{children}</Stack>

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              position: "sticky",
              zIndex: 999,
              bottom: -2,
              background: "#ffff",
              paddingBottom: { xs: 2, md: 2.5, lg: 4.5 },
            }}
          />
        </Stack>
      </Paper>
    </motion.div>
  );
}

export default ModalContainer;
