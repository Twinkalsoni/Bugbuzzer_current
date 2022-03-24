import React from "react";

import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Bugs from "./components/Bugs";
import Compaigns from "./components/Compaigns";
import QandAList from "./components/QandAList";
import BountyWinners from "./components/BountyWinners";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <Router> */}

      <Navbar />

      <Container>
        <Intro />
        <Bugs />
        <Compaigns />
        <QandAList />
        <BountyWinners />
      </Container>
      <Footer />
    </>
  );
};

export default App;
