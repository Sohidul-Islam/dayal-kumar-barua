import React from "react";

import PersonalDescriptionCard from "./PersonalDescriptionCard";
import { education, about, political } from "./helpers";
import { Stack } from "@mui/material";

function PersonalInformation() {
  return (
    <Stack
      pt={7.5}
      direction="column"
      sx={{
        gap: { xs: 6, md: 10, lg: 12 },
      }}
    >
      {/* about me section */}
      <PersonalDescriptionCard
        idName={"about"}
        right={true}
        title={about?.title}
        subtitle={about?.subtitle}
        description={about?.description}
        image={about?.image}
      />
      {/* Political section */}
      <PersonalDescriptionCard
        idName={"political"}
        right={false}
        title={political?.title}
        subtitle={political?.subtitle}
        description={political?.description}
        image={political?.image}
      />
      {/* Education section */}
      <PersonalDescriptionCard
        idName={"education"}
        right={true}
        title={education?.title}
        subtitle={education?.subtitle}
        description={education?.description}
        image={education?.image}
      />
    </Stack>
  );
}

export default PersonalInformation;
