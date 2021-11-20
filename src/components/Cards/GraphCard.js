import React from "react";
import * as BiIcons from "react-icons/bi";
import { makeStyles } from "@mui/styles";
import { Divider } from "@mui/material";
import LineChart from "../charts/LineChart";

const useStyles = makeStyles({});

function GraphCard({ title }) {
  const classes = useStyles();

  return <LineChart />;
}
export default GraphCard;
