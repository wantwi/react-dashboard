import { Grid, Card, Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#016450' : '#308fe8',
    },
  }));

function Card2() {
  return (
    <Grid item xs={4}>
      <Card elevation={0} style={{padding:"20px ",border:"1px solid #f1f1f1"}}>
       
      </Card>
    </Grid>
  );
}

export default Card2;
