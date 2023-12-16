/* eslint-disable no-undef */
import React from "react";

import { Stack, Tab, Tabs } from "@mui/material";
import { motion } from "framer-motion";

function EventNavigation({ onChange, value = 0, menuList = [] }) {
  return (
    <Stack pt={7.5}>
      <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
        <Tabs
          sx={{
            ".MuiTabs-indicator": {
              background: "#3C5129",
            },
          }}
          gap={2}
          justifyContent="center"
          value={value}
          onChange={(e, newValue) => {
            console.log(e, newValue);
            if (onChange) onChange(newValue);
          }}
        >
          {menuList.map((menu, i) => (
            <Tab
              sx={{
                padding: "4px 8px",
                "&.Mui-selected": {
                  color: "#3C5129",

                  fontWeight: 700,
                },
                "&.MuiTab-root": {
                  color: "#3C5129",
                  fontWeight: 700,
                },

                ".MuiTabs-indicator": {
                  background: "red",
                },
                fontWeight: 600,
                transition: "all 0.3s ease-in",
              }}
              disableFocusRipple
              disableRipple
              key={i}
              label={menu?.label}
            />
          ))}
        </Tabs>
      </motion.div>
    </Stack>
  );
}

export default EventNavigation;
