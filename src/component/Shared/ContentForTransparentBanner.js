import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function ContentForTransparentBanner({ data, type = "title" }) {
  return (
    <Grid
      container
      py={7.5}
      px={7.5}
      spacing={{ xs: 2, md: 2.5 }}
      columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
        <Grid item key={i} xs={12} md={6} lg={4}>
          <Stack
            sx={{
              border: "1px solid rgba(255, 255, 255, 0.6)",
              padding: "20px 16px",
              borderRadius: "7px",
              // minWidth: "250px",

              background: "rgba(0, 0, 0, 0.3)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(15px)",
            }}
          >
            <Stack>
              <Typography sx={{ color: "#fff", fontSize: "24px" }}>
                Title
              </Typography>
              <Stack>
                {type === "list" ? (
                  <List dense sx={{ color: "#fff" }}>
                    {[1, 2, 3, 4].map((itm, key) => (
                      <ListItem key={key} disablePadding disableGutters>
                        <ListItemText
                          id={key}
                          sx={{ fontSize: "20px !important" }}
                          primary={`Line item ${
                            itm + 1
                          } ভারতীয় উপমহাদেশের দেশভাগের সময় ১৯৪৭ খ্রিস্টাব্দে ধর্ম গরিষ্ঠতার ভিত্তিতে পুনর্বার বাংলা প্রদেশটিকে ভাগ করা হয়। পাকিস্তান এর প্রদেশ হিসাবে জন্ম নেয় পূর্ব পাকিস্তান`}
                        />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography sx={{ color: "#fff", fontSize: "18px" }}>
                    ১২০৫-১২০৬ খ্রিস্টাব্দের দিকে ইখতিয়ার উদ্দিন মুহম্মদ
                    বখতিয়ার খলজী নামের একজন তুর্কী বংশোদ্ভূত সেনাপতি রাজা
                    লক্ষ্মণ সেনকে পরাজিত করে সেন রাজবংশের পতন ঘটান।ভারতীয়
                    উপমহাদেশের দেশভাগের সময় ১৯৪৭ খ্রিস্টাব্দে ধর্ম গরিষ্ঠতার
                    ভিত্তিতে পুনর্বার বাংলা প্রদেশটিকে ভাগ করা হয়। পাকিস্তান এর
                    প্রদেশ হিসাবে জন্ম নেয় পূর্ব পাকিস্তান
                  </Typography>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

export default ContentForTransparentBanner;
