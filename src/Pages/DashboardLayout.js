import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Grid,
  Container,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import Intro from "../components/Intro";
import Bugs from "../components/Bugs";
import Compaigns from "../components/Compaigns";
import QandAList from "../components/QandAList";
import BountyWinners from "../components/BountyWinners";
import { Link } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <>
      <DashboardNav />
      <Container>
        <Intro />
        <Bugs />
        <QandAList />
        <Compaigns />
        <BountyWinners />
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
