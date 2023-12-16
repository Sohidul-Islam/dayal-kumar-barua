import React from "react";
import { Stack, Typography } from "../../../component/Shared/Common";

function Menu({ menu }) {
  return (
    <Stack
      sx={{
        paddingBottom: "0px",
        padding: "0px 4px",
        borderBottom: "2px solid transparent",
        cursor: "pointer",
        color: "#3C5129",
        transition: "all 0.3s linear",
        "&:hover": {
          color: "#3C5129",
          borderBottom: "2px solid #3C5129",
        },
      }}
      direction="row"
    >
      <Typography>{menu?.label}</Typography>
    </Stack>
  );
}

export default Menu;
