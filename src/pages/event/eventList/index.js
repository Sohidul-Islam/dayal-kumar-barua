import { Box, Grid } from "@mui/material";
import React from "react";
import EventContainer from "./EventContainer";
import { motion } from "framer-motion";
// import { AnimatePresence, motion } from "framer-motion";

function EventList({ currentTab, data = [] }) {
  // const [selected, setSelected] = useState(null);
  return (
    <Box sx={{ flexGrow: 1 }} px={2.5}>
      <Grid
        container
        spacing={{ xs: 2, md: 2.5 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      >
        {data?.map((event, i) => (
          <Grid item xs={4} sm={4} md={4} lg={3} key={i}>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              exit={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <EventContainer event={event} />
            </motion.div>
          </Grid>
        ))}

        {/* <AnimatePresence>
        {selected && (
          <motion.div layoutId={selected}>
            <EventContainer event={selected?.event} />
          </motion.div>
        )}
      </AnimatePresence> */}
      </Grid>
    </Box>
  );
}

export default EventList;
