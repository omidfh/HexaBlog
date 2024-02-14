import React from "react";
import { Layout, Stack, Main } from "@layout";
import PageTitle from "@components/PageTitle";
import Section from "@components/Section";
import Divider from "@components/Divider";
import Seo from "@widgets/Seo";

const PagePrivacy = (props) => (
  <Layout {...props}>
    <Seo title="Privacy Notice" />
    <Divider />
    <Stack>
      <Main>
        <Section>
          <PageTitle
            header="This page is Privacy Notice"
            subheader="Data Will be Added As soon as Possible :)"
          />
        </Section>
      </Main>
    </Stack>
  </Layout>
);

export default PagePrivacy;
