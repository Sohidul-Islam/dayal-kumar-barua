import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import Footer from "../Footer";

import image6 from "../../assets/images/images/banner.jpg";
import { Container } from "reactstrap";

function PageContainer({ children, image, title = "Banner" }) {
  return (
    <Stack mt={8} gap={7.5}>
      <Avatar
        src={image || image6}
        variant="square"
        sx={{ width: "100%", height: "min(650px,60vh)" }}
      >
        <Typography
          sx={{
            fontSize: "62px",
          }}
        >
          {title}
        </Typography>
      </Avatar>
      <Container>{children}</Container>

      <Footer />
    </Stack>
  );
}

export default PageContainer;
