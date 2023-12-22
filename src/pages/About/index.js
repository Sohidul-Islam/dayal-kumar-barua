import React from "react";
import PageContainer from "../../component/Shared/PageContainer";
import PersonalInformation from "../personal";
import { Stack, Typography } from "@mui/material";
import TitledContainer from "../../component/Shared/TitleContainer";

function AboutPage() {
  return (
    <PageContainer>
      <TitledContainer title={"About"}>
        <PersonalInformation />
      </TitledContainer>
    </PageContainer>
  );
}

export default AboutPage;
