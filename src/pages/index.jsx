import * as React from 'react';
import HomeLayout from '../components/HomeLayout';
import SEO from '../components/SEO';
import Typography from '@mui/material/Typography';
import {
  Backdrop,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Link,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useGetUsersQuery } from '../services/users';
import UserDialog from '../components/index/UserDialog';

export default function Users() {
  const { data, isFetching, isLoading } = useGetUsersQuery();
  return (
    <HomeLayout>
      <SEO title={'Users'} />
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
          Users
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          gutterBottom
        >
          The users displayed in this page are fetched from{' '}
          {
            <Link href={'https://reqres.in/'} target={'_blank'}>
              ReqRes API
            </Link>
          }{' '}
          by using{' '}
          {
            <Link
              href={
                'https://redux-toolkit.js.org/rtk-query/api/created-api/hooks#usequery'
              }
              target={'_blank'}
            >
              useQuery
            </Link>
          }{' '}
          of{' '}
          {
            <Link
              href={'https://redux-toolkit.js.org/rtk-query/overview'}
              target={'_blank'}
            >
              RTK Query
            </Link>
          }
          . The 2-second delay is intentional.
        </Typography>
      </Container>
      {(isFetching || isLoading) && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isFetching}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {data?.map(({ id, first_name, last_name, avatar }) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia component="img" image={avatar} alt={first_name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {first_name + ' ' + last_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is just a random information from a fake API.
                  </Typography>
                </CardContent>
                <CardActions>
                  <UserDialog id={id} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </HomeLayout>
  );
}
