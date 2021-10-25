import * as React from "react";
import Layout from "../components/layouts/Layout";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Seo from "../components/Seo";

export default function Template() {
  return (
    <Layout>
      <Seo title={"Template"} />
      <Container
        maxWidth={"sm"}
        sx={{
          py: (theme) => theme.spacing(3),
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Template
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          gutterBottom
        >
          This is a sample template page.
        </Typography>
      </Container>
    </Layout>
  );
}
