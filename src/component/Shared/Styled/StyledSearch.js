import { Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import React from "react";

function StyledSearch({ value, onChange, placeholder, icon }) {
  return (
    <InputBase
      value={value}
      color="primary"
      onChange={(e) => {
        if (onChange) {
          onChange(e);
        }
      }}
      startAdornment={icon || <Search />}
      placeholder={placeholder || "Search"}
      inputProps={{ "aria-label": "search google maps" }}
      sx={{
        width: "100%",
        "&.MuiInputBase-root": {
          background: "#fff",
          border: "1px solid #eee",
          padding: "4px 8px",
          borderRadius: "32px",
        },
        ".MuiInputBase-input": {
          background: "rgba(255,255,255,0.5)",
        },
      }}
    />
  );
}

export default StyledSearch;
