import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function User() {
  const { Moralis, user, logout, isAuthenticated } = useMoralis();
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/dashboard/userProfile" style={{ textDecoration: "none" }}>
        <Grid display={"flex"}>
          <Grid item md={4}>
            
            <Avatar name={user?.attributes.username} />
          </Grid>
          <Grid item md={8}>
              <div style={{color:"rgb(216, 33, 72)",marginTop:"1vh"}}>
              {user?.attributes.username.slice(0,10)}

              </div>
          </Grid>

        </Grid>
      </Link>
    </div>
  );
}
