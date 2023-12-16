/* eslint-disable no-unused-vars */
import { Avatar, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import ModalContainer from "../../../component/Shared/ModalContainer";

function EventModal({ event, onClose }) {
  return (
    <ModalContainer title={event?.title} onClose={onClose}>
      <Stack gap={2.5}>
        <Stack>
          <Avatar
            src={event?.image}
            variant="rounded"
            sx={{
              width: "100%",
              height: "350px",
            }}
            alt="image_banner"
          >
            <Typography sx={{ fontSize: { sm: 24, md: 32, lg: 64 } }}>
              Banner
            </Typography>
          </Avatar>
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontSize: { sm: 10, md: 14, lg: 16 },
            }}
          >
            {event?.description}
          </Typography>
        </Stack>
      </Stack>
    </ModalContainer>
  );
}

export default EventModal;
