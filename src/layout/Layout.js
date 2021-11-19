import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {Card,Grid} from "@mui/material";
import MemuList from "../components/MenuList";
import SideBar from "./SideBar";
import Card1 from "../components/Cards/Card1";
import ChartCard from "../components/Cards/ChartCard";
import {
  options,
  series,
  options_donut,
  series_donut,
} from "../seeData/SeedData";
import Card3 from "../components/Cards/Card3";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),

  color: theme.palette.text.secondary,
}));

const Layout = () => {
  return (
    <Box style={{ marginTop: "30px" }} sx={{ flexGrow: 1 }}>
      <Grid style={{ margin: "0 auto" }} container spacing={2} xl={10}>
        <Grid item xs={2}>
          <Paper elevation={0}>
            <SideBar />
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <Grid container spacing={2}>
              <Card1 />
              <Card1 />
              <Card1 />
            </Grid>
          
            <Grid container spacing={2} style={{marginTop:20}}>
              <Grid item xs={4}>
                  <Card3/>
                {/* <ChartCard
                  options={options_donut}
                  series={series_donut}
                  type="donut"
                  width={400}
                  height={250}
                /> */}
              </Grid>
              <Grid item xs={8}>
                <Card
                  elevation={0}
                  style={{ padding: "20px ", border: "1px solid #f1f1f1" }}
                >
                  <ChartCard
                    options={options}
                    series={series}
                    type="line"
                    width="100%"
                    height={250}
                  />
                </Card>
              </Grid>
            </Grid>
            
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
