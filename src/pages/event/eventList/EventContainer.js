/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import EventModal from "./EventModal";

function EventContainer({ event }) {
  const [selected, setSelected] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Stack
      sx={{
        borderRadius: "12px",
        background: "#fff",
        border: "1px solid #eeee",
        height: 450,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ rotate: 45, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Stack
          sx={{
            width: "100%",
            height: 225,
          }}
        >
          <img
            src={event?.image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="image_title"
          />
        </Stack>
        <Stack justifyContent={"flex-start"} alignItems={"flex-start"} p={2.5}>
          <Typography variant="h6">{event?.title}</Typography>
          <Typography
            variant="p"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: { xs: 3, sm: 3, md: 3, lg: 4 },
            }}
          >
            {event?.description}
          </Typography>
          <Box
            sx={{
              paddingTop: { xs: 1, sm: 1, md: 1.5, lg: 2 },
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                outline: "none",
                border: "none",
                padding: "0px",
                margin: "0px",
              }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  setSelected(event);
                  setOpen(true);
                }}
                sx={{
                  background: "#8cb369",
                  lineHeight: "13px",
                  padding: "8px 4px",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#8cb369!important",
                    boxShadow: "none",
                  },
                }}
              >
                View
              </Button>
            </motion.button>
          </Box>
        </Stack>
      </motion.div>

      <Modal open={open}>
        <EventModal event={selected} onClose={() => setOpen(false)} />
      </Modal>
    </Stack>
  );
}

export default EventContainer;
