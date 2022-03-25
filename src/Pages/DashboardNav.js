import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import QandAdetail from "./Q&Adetail";

const DashboardNav = () => {
  return (
    <AppBar color="inherit" position="fixed" sx={{ height: "70px" }}>
      <Toolbar>
        <Typography flexGrow={1}>
          <Link to="/">
            {/* <Typography flexGrow={1}> */}
            <img src="BugBuzzer-Logo-Web.png" alt="logo" />
            {/* </Typography> */}
          </Link>
        </Typography>

        <Box m={1} p={2}>
          <Button
            style={{
              color: "black",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            size="medium"
            variant="text"
          >
            Report Bug
          </Button>

          <Link to="/dashboard/QueAns" style={{ textDecoration: "none" }}>
            <Button
              style={{
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
              size="medium"
              variant="text"
            >
              Q&A
            </Button>
          </Link>
          <Link to="/dashboard/bugcampaigns" style={{ textDecoration: "none" }}>
            <Button
              style={{
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
              size="medium"
              variant="text"
            >
              Bounty Campaign
            </Button>
          </Link>

          <Button
            style={{
              color: "black",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            size="medium"
            variant="text"
          >
            Hire Experts{" "}
          </Button>
          <Link
            to="/dashboard/Question-form"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              size="small"
              style={{
                backgroundColor: "#D82148",
                textDecoration: "none",
                textTransform: "capitalize",
                border: "2px solid #D82148",
                marginRight: "18px",
                fontWeight: "bold",
              }}
              sx={{ borderRadius: 2 }}
            >
              Ask question
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNav;
