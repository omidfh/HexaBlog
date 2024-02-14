import React from "react";
import { Layout, Stack, Main } from "@layout";
import PageTitle from "@components/PageTitle";
import Section from "@components/Section";
import Divider from "@components/Divider";
import Seo from "@widgets/Seo";

const PageAbout = (props) => (
  <Layout {...props}>
    <Seo title="About Us" />
    <Divider />
    <Stack>
      <Main>
        <Section>
          <PageTitle
            header="This page is About US."
            subheader="Data Will be Added As soon as Possible :)"
          />
        </Section>
      </Main>
    </Stack>
  </Layout>
);

export default PageAbout;
