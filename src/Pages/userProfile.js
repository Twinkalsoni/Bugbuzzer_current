import React from "react";
import { Box } from "@mui/system";
import { Typography, Container, Button, Divider, Grid } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Style.css'


export default function UserProfile() {
    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Container>
                <Grid item xs={4} sm={6} md={12}>
                    <div style={{ marginTop: "20vh", marginBottom: "20vh" }}>
                        <Box 
                            sx={{
                                height: "190px",
                                width: "100%",
                                border: "2px solid #C4C4C4",
                                background: "#C4C4C4",
                                borderRadius: "15px",
                                mb: 2,
                            }} >
                            <Typography variant="h3" align="center" mt={8} color="GrayText">100x100</Typography>
                        </Box>
                        <Box
                            sx={{
                                height: "100px",
                                width: "100px",
                                border: "7px solid white",
                                background: "#C4C4C4",
                                mt: -7,
                                ml: 3,
                                borderRadius: "50%",
                                mb: 2,
                            }}
                        >
                            <Typography variant="subtitle2" align="center" mt={5} color="GrayText">100x100</Typography>

                        </Box>
                        <Box sx={{ ml: "14%", mt: "-7%" }}>
                            <Typography variant="subtitle1" fontWeight="bold">EoKCWV9PLGLN5KjicoPAhh10q
                                <Button variant="contained" size="medium" sx={{ backgroundColor: "#D82142", ml: "66%", color: "FFFFF ", textTransform: "none"}}>Follow</Button>

                            </Typography>

                            <Typography variant="subtitle2" color="#C4C4C4">EoKCWV9PLGLN5KjicoPAhh10q
                            </Typography>
                            <Typography variant="subtitle1" fontWeight="bold">SuperFun.Social Points :</Typography>
                            <Typography variant="subtitle1" fontWeight="bold" mb={3}>200 <span style={{ color: "#D82142", marginRight: "3%" }}> Followers </span> 200  <span style={{ color: "#D82142" }}>Following </span></Typography>
                        </Box>
                        <Box sx={{ width: '100%' }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                textColor="#D82142"
                                indicatorColor="secondary"
                                aria-label="secondary tabs example"
                            >
                                <Tab value="one" label="Question" sx={{ textTransform: "none" }} />
                                <Tab value="two" label="Bounty" sx={{ textTransform: "none" }} />
                                <Tab value="three" label="Rewards" sx={{ textTransform: "none" }} />
                                <Tab value="four" label="Leader board" sx={{ textTransform: "none" }} />

                            </Tabs>
                            <Divider />
                        </Box>

                    </div>
                </Grid>
            </Container>
        </>
    )
}