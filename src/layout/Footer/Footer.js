import * as React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Avatar, Stack } from "@mui/material";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";

const useStyles = makeStyles({
  txt_mute: {
    color: "#767676",
  },
  bs: {
    boxShadow:
      "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      style={{ margin: "0 auto" }}
      container
      spacing={2}
      xm={12}
      lg={11}
      xl={10}
    >
      <Grid item xs={3}>
        <p>Counter Delivery, Carters Beach PostCentre, Westport</p>
      </Grid>
      <Grid item xs={3}>
        <h4>About</h4>
        <p className={classes.txt_mute}>Team</p>
        <p className={classes.txt_mute}>Careers</p>
        <p className={classes.txt_mute}>Blog</p>
      </Grid>
      <Grid item xs={3}>
        <h4>Support</h4>
        <p className={classes.txt_mute}>Help Center</p>
        <p className={classes.txt_mute}>Neighborhood Support</p>
        <p className={classes.txt_mute}>Trust & Safety</p>
      </Grid>
      <Grid item xs={3}>
        <h4>Address</h4>
        <p style={{ width: "80%", color: "#767676" }}>
          Counter Delivery, Carters Beach PostCentre, Westport
        </p>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar
              style={{
                boxShadow:
                  "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px",
              }}
              sx={{ bgcolor: "#ffffff", color: "#098B71" }}
            >
              <FiIcons.FiFacebook />
            </Avatar>
            <Avatar
              style={{
                boxShadow:
                  "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px",
              }}
              sx={{ bgcolor: "#098B71", color: "#fff" }}
            >
              <FaIcons.FaInstagram />
            </Avatar>
            <Avatar
              style={{
                boxShadow:
                  "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px",
              }}
              sx={{ bgcolor: "#ffffff", color: "#098B71" }}
            >
              <FaIcons.FaTwitter />
            </Avatar>
          </Stack>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
