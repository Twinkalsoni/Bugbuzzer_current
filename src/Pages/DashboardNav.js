import React,{useState} from "react";
import { AppBar, Toolbar, Button, Typography, Avatar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Hidden } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { ListItem } from '@mui/material'

import { borderBottom, Box } from "@mui/system";
import { Link } from "react-router-dom";
import QandAdetail from "./Q&Adetail";
import BugLogo from "./BugBuzzer-Logo-Web.png";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import User from "./user";

const DashboardNav = () => {
  const { Moralis, user, logout, isAuthenticated } = useMoralis();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  return (
    <AppBar color="inherit" position="fixed" sx={{ height: "70px" }}>
      <Toolbar>
        <Typography flexGrow={1}>
          <Link to="/dashboard">
            {/* <Typography flexGrow={1}> */}
            <img src={BugLogo} alt="logo" />
            {/* </Typography> */}
          </Link>
        </Typography>
        <Hidden smDown>


          <Box m={1} p={2}>
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
              href="/dashboard/leaderboard"
              style={{
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
              size="medium"
              variant="text"
            >
              Leader Board{" "}
            </Button>
            <Link
              to="/dashboard/Question-form"
              style={{ textDecoration: "none" }}
            >
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
              <Button
                variant="text"
                size="small"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              // sx={{ borderRadius: 2 }}
              >
                Ask a Question |
              </Button>
            </Link>
            <Button
              variant="text"
              size="medium"
              style={{
                color: "rgb(216, 33, 72)",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            // sx={{ borderRadius: 2 }}
            >
              <User />
              {/* <Avatar />
            {"  "}
            {user?.attributes.username} */}
            </Button>
          </Box>
          <Button
            style={{
              color: "#D82148",
              fontWeight: "bold",
              textTransform: "capitalize",
              border: "1px solid #D82148",
            }}
            size="small"
            variant="outlined"
            onClick={async () => {
              await logout();
              navigate("/");
            }}
          >
            Log out
          </Button>

        </Hidden>
        <Hidden smUp>
          <IconButton>
            <MenuIcon onClick={() => setOpen(true)} />
          </IconButton>
        </Hidden>
      </Toolbar>

      <SwipeableDrawer anchor='left' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <Box textAlign="center" p={5} sx={{ width: "180px", height: "150px", color: "#D82148" }}>
          <Link to="/dashboard/bugcampaigns" style={{ textDecoration: "none" }}>
            <ListItem Button
              style={{
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
                borderBottom:"1px solid #D82148"
              }}
              size="medium"
              variant="text"
            >
              Bounty Campaign
            </ListItem>
          </Link>

          <ListItem Button
            href="/dashboard/leaderboard"
            style={{
              color: "black",
              fontWeight: "bold",
              textTransform: "capitalize",
              borderBottom:"1px solid #D82148"
            }}
            size="medium"
            variant="text"
          >
            Leader Board{" "}
          </ListItem>
          <Link
            to="/dashboard/Question-form"
            style={{ textDecoration: "none" }}
          >
            <Link to="/dashboard/QueAns" style={{ textDecoration: "none" }}>
              <ListItem Button
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  borderBottom:"1px solid #D82148"
                }}
                size="medium"
                variant="text"
              >
                Q&A
              </ListItem>
            </Link>
            <ListItem Button
              variant="text"
              size="small"
              style={{
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
                borderBottom:"1px solid #D82148"
              }}
            // sx={{ borderRadius: 2 }}
            >
              Ask a Question |
            </ListItem>
          </Link>
          <ListItem Button
            variant="text"
            size="medium"
            style={{
              color: "rgb(216, 33, 72)",
              fontWeight: "bold",
              textTransform: "capitalize",
              borderBottom:"1px solid #D82148"
            }}
          // sx={{ borderRadius: 2 }}
          >
            <User />
            {/* <Avatar />
            {"  "}
            {user?.attributes.username} */}
          </ListItem>
        {/* </Box> */}
        <ListItem Button
          style={{
            color: "#D82148",
            fontWeight: "bold",
            textTransform: "capitalize",
            border: "1px solid  ",
            borderRadius:"10px",
            borderBottom:"1px solid #D82148"
          }}
          size="small"
          variant="outlined"
          
          onClick={async () => {
            await logout();
            navigate("/");
          }}
        >
          Log out
        </ListItem>

      </Box>
    </SwipeableDrawer>

    </AppBar >
  );
};

export default DashboardNav;
