import * as React from "react";
import Layout from "../components/layouts/Layout";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useGetUsersQuery } from "../app/services/users";
import UserDialog from "../components/index/UserDialog";
import LoadingBackdrop from "../components/LoadingBackdrop";
import Seo from "../components/Seo";

export default function Users() {
  const { data, isFetching, isLoading } = useGetUsersQuery();
  return (
    <Layout>
      <Seo title={"Home"} />
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
          Users
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          gutterBottom
        >
          The users displayed in this page are fetched from{" "}
          {
            <Link href={"https://reqres.in/"} target={"_blank"}>
              ReqRes API
            </Link>
          }{" "}
          by using{" "}
          {
            <Link
              href={
                "https://redux-toolkit.js.org/rtk-query/api/created-api/hooks#usequery"
              }
              target={"_blank"}
            >
              useQuery
            </Link>
          }{" "}
          of{" "}
          {
            <Link
              href={"https://redux-toolkit.js.org/rtk-query/overview"}
              target={"_blank"}
            >
              RTK Query
            </Link>
          }
          . The 2-second delay is intentional.
        </Typography>
      </Container>
      <LoadingBackdrop open={isFetching || isLoading} />
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {data?.map(({ id, first_name, last_name, avatar }) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia component="img" image={avatar} alt={first_name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {first_name + " " + last_name}
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
    </Layout>
  );
}
