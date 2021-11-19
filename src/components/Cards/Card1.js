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

function Card1() {
  return (
    <Grid item xs={4}>
      <Card elevation={0} style={{padding:"20px ",border:"1px solid #f1f1f1"}}>
        <div>
          <div style={{ float: "left", fontSize: "16px",fontWeight:"500" }}>Sales</div>
          <div style={{ float: "right",color:"#9EA0A5",fontSize:"12px" }}>Monthly Goals</div>
        </div>
        <div style={{clear:"both"}}>
          <div style={{ float: "left",fontSize:30,fontWeight:"bold" }}>89.1%</div>
          <div
            style={{ float: "right", color: "#348373", fontSize: "12px",marginTop:15 }}
          >
            +6.9%
          </div>
          <div style={{clear:"both",marginTop:20}}>
          <BorderLinearProgress variant="determinate" value={70} />
          </div>
          <div style={{ color:"#9EA0A5",marginTop:11,fontSize:"12px" }}>Yearly Goal</div>
        </div>
      </Card>
    </Grid>
  );
}

export default Card1;
