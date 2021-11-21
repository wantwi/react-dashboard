import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import SideBar from "./SideBar";
import Footer from "./Footer/Footer";
import Main from "./main/Main";

const Layout = () => {
  return (
    <Box style={{ marginTop: "30px" }} sx={{ flexGrow: 1 }}>
      <Grid
        style={{ margin: "0 auto" }}
        container
        spacing={2}
        xm={12}
        lg={11}
        xl={10}
        item
      >
        <Grid item xs={2} md={3}>
          <Paper elevation={2}>
            <SideBar />
          </Paper>
        </Grid>

        <Main />
      </Grid>
      <Footer />
    </Box>
  );
};

export default Layout;
