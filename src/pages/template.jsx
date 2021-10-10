import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default function Template() {
  return (
    <Layout>
      <SEO title={'Template'} />
      <Container
        maxWidth={'sm'}
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
