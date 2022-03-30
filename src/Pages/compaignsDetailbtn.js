import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
const Detailbutton = () => {
  return (
    <>
      <div
        style={{
          background: "#cccccc29",
          height: "70vh",
          marginTop: "10%",
          // marginBottom: "30%",

          border: "1px solid white",
        }}
      >
        <Container style={{ marginTop: "5%", marginBottom: 0 }}>
          <Stack direction="row" spacing={10} justifyContent="center">
            <Card
              sx={{ width: "45%", height: "52vh", backgroundColor: "#FFFFFF" }}
            >
              <CardContent
                style={{ marginTop: "0%", justifyContent: "center" }}
              >
                <Typography
                  variant="h6"
                  style={{
                    width: "100%",
                    marginTop: "10%",
                    float: "left",
                    color: "#D82148",
                    borderBottom: "2px solid #D82148",
                  }}
                >
                  An atlas of love
                </Typography>
                <Typography color="black">
                  On sell{" "}
                  <span
                    style={{
                      float: "right",
                      fontWeight: "bold",
                      color: "#D82148",
                    }}
                  >
                    Price: $79
                  </span>
                </Typography>
                <Typography
                  color="black"
                  style={{ borderBottom: "2px solid #D82148" }}
                >
                  Book condition:Used
                </Typography>
                <Typography mt={2}>
                  <span>Posted on:</span>{" "}
                  <span style={{ marginLeft: "175px" }}>Category:</span>
                  <br />
                  1, Dec{" "}
                  <span style={{ marginLeft: "206px", fontSize: "18px" }}>
                    Romance & Short Stories
                  </span>
                </Typography>
                <Typography mt={2}>
                  <span>Posted From:</span>{" "}
                  <span style={{ marginLeft: "154px" }}>Views on post</span>
                  <br />
                  <span style={{ fontSize: "18px", float: "left" }}>
                    Naran Lala School Of <br />
                    Industrial Management
                    <br />& Computer
                  </span>
                  <span style={{ marginLeft: "70px" }}>23144</span>
                </Typography>
                <br />
                <br />
                <br />
              </CardContent>
            </Card>
            <Box
              sx={{
                height: "270px",
                width: "210px",
                border: "2px solid #ffffff",
                background: "#FFFFFF",
                padding: "20px",
                paddingBottom: "70px",
              }}
            >
              <Box
                sx={{
                  height: "94px",
                  width: "97px",
                  border: "2px solid #ffffff",
                  borderRadius: "50%",
                  background: "#C4C4C4",
                  mt: 4,
                  p: 1,
                  m: 1,
                  ml: 6,
                }}
              ></Box>
              <Typography
                variant="subtitle1"
                textAlign="center"
                mb={1}
                mt={5}
                color="#D82148"
                fontWeight="bold"
              >
                Jill thakkar
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                fontSize="14px"
                mt={4}
              >
                {" "}
                <HomeIcon />
                Navsari
              </Typography>
              <Button
                variant="contained"
                size="small"
                style={{
                  backgroundColor: "#D82148",
                  textTransform: "capitalize",
                  border: "2px solid #D82148",
                  marginLeft: "40px",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
                sx={{ borderRadius: 1, mt: 5 }}
              >
                View all books
              </Button>
            </Box>
          </Stack>
        </Container>
      </div>
      <div style={{ marginTop: "10vh" }}>
        <Container>
          <Grid align="center">
            <Box
              sx={{
                // height: "50%",
                // width: "50%",
                // marginTop: "3vh",
                border: "2px solid black",
              }}
            >
              <Box
                sx={{
                  height: "94px",
                  width: "97px",
                  border: "2px solid #ffffff",
                  borderRadius: "50%",
                  background: "#C4C4C4",
                  marginRight: "500px",
                  mt: 2,
                  p: 2,
                }}
              >
                {" "}
                <span style={{ marginLeft: "150px" }}>Jack</span>
              </Box>
              <Typography color="black" mt={2}>
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Facing error in writing smart contracts and integrating in
                  Hardhat{" "}
                </span>{" "}
                <br />
              </Typography>
              <Typography mt={2} mb={2}>
                You are trying to run Hardhat outside of a Hardhat project. You
                can learn how to use Hardhat by reading the Getting Started
                guide. Hardhat doesn't support your Node.js version. Please
                upgrade your version of Node.js and try again. You are tying to
                perform an unsupported operation. Unless you are creating a task
                or plugin, this is probably a bug. Please report it (opens new
                window)to help us improve Hardhat.
              </Typography>
            </Box>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Detailbutton;
