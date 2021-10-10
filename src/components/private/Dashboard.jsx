import React from 'react';
import Layout from '../Layout';
import SEO from '../SEO';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
  return (
    <Layout>
      <SEO title={'Dashboard'} />
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
          Welcome to Dashboard!
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          gutterBottom
        >
          Hi there! This page can only be viewed if you are authenticated.
        </Typography>
      </Container>
    </Layout>
  );
};

export default Dashboard;
