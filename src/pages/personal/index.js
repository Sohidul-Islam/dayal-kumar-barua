import React from "react";
import { Stack } from "../../component/Shared/Common";
import PersonalDescriptionCard from "./PersonalDescriptionCard";
import { education, about, political } from "./helpers";

function PersonalInformation() {
  return (
    <Stack direction="column">
      {/* about me section */}
      <PersonalDescriptionCard
        right={true}
        title={about?.title}
        subtitle={about?.subtitle}
        description={about?.description}
        image={about?.image}
      />
      {/* Political section */}
      <PersonalDescriptionCard
        right={false}
        title={political?.title}
        subtitle={political?.subtitle}
        description={political?.description}
        image={political?.image}
      />
      {/* Education section */}
      <PersonalDescriptionCard
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
