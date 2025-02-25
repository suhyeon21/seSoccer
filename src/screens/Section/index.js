import React from "react";
import Rank from "../../components/Rank";
import SoonMatch from "../../components/SoonMatch";
import { SectionContainer, SectionGrid } from "./style";
import { Grid } from "@mui/material";

const Section = () => {
  return (
    <SectionContainer>
      <SectionGrid container>
        <Grid item xs={12} sm={12} lg={7}>
          <Rank />
        </Grid>
        <Grid item xs={12} sm={12} lg={5}>
          <SoonMatch />
        </Grid>
      </SectionGrid>
    </SectionContainer>
  );
};

export default Section;
