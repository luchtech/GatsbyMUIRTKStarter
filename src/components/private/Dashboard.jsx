import React from "react";
import Seo from "../Seo";
import { Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import LayoutWithDrawer from "../layouts/LayoutWithDrawer";

const Dashboard = () => {
  return (
    <LayoutWithDrawer>
      <Seo title={"Dashboard"} />
      <Container
        maxWidth={"md"}
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
    </LayoutWithDrawer>
  );
};

export default Dashboard;
