import React, { useState } from "react";
import EventList from "../event/eventList";
import PageContainer from "../../component/Shared/PageContainer";
import { getData } from "../event";
import { Input, InputBase, Stack, TextField, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import StyledSearch from "../../component/Shared/Styled/StyledSearch";
import TitledContainer from "../../component/Shared/TitleContainer";

function EventPage() {
  const [search, setSearch] = useState("");

  return (
    <PageContainer>
      <TitledContainer title={"Events"}>
        <Stack gap={2.5}>
          <StyledSearch
            value={search}
            placeholder={"Search Event"}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <EventList data={getData()} />
        </Stack>
      </TitledContainer>
    </PageContainer>
  );
}

export default EventPage;
