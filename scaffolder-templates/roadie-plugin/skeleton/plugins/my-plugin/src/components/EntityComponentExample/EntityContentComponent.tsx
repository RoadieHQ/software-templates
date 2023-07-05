import React from "react";
import { useEntity } from "@backstage/plugin-catalog-react";
import { Grid } from "@material-ui/core";
import {
  Page,
  Content,
  ContentHeader,
  SupportButton,
} from "@backstage/core-components";
import { ExampleFetchComponent } from "../ExampleFetchComponent";

export const EntityContentComponent = () => {
  const { entity } = useEntity();
  console.info(`Displaying data for ${JSON.stringify(entity)}`);
  return (
    <Page themeId="tool">
      <Content>
        <ContentHeader title="My Plugin">
          <SupportButton>My Custom Roadie Plugin</SupportButton>
        </ContentHeader>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <ExampleFetchComponent />
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
