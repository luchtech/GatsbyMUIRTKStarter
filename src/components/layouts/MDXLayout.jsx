import React from "react";
import LayoutWithDrawer from "./LayoutWithDrawer";
import { MDXProvider } from "@mdx-js/react";
import {
  Container,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const components = {
  h1: (props) => (
    <Typography component={"h1"} variant={"h3"} {...props} gutterBottom />
  ),
  h2: (props) => (
    <Typography component={"h2"} variant={"h4"} {...props} gutterBottom />
  ),
  h3: (props) => (
    <Typography component={"h3"} variant={"h5"} {...props} gutterBottom />
  ),
  p: (props) => <Typography paragraph {...props} gutterBottom />,
  table: (props) => (
    <TableContainer
      sx={{
        padding: (theme) => theme.spacing(2),
        my: (theme) => theme.spacing(2),
      }}
      component={Paper}
    >
      <Table {...props} />
    </TableContainer>
  ),
  tr: TableRow,
  tbody: TableBody,
  thead: TableHead,
};

const MDXLayout = ({ children }) => {
  deckDeckGoHighlightElement().then((r) => {
    // do nothing
  });
  return (
    <LayoutWithDrawer>
      <MDXProvider components={components}>
        <Container
          maxWidth={"sm"}
          sx={{
            py: (theme) => theme.spacing(3),
          }}
        >
          {children}
        </Container>
      </MDXProvider>
    </LayoutWithDrawer>
  );
};

export default MDXLayout;
