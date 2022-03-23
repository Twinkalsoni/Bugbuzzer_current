import React from 'react'
import { AppBar, Toolbar, Button, Typography, Grid} from '@mui/material'
import { Box } from '@mui/system'

const Dashboard = () => {
  return (
      <>
      <AppBar color='inherit' position='fixed' sx={{ height:'70px'}}>
          <Toolbar >
            <Typography flexGrow={1}>
            <img src="BugBuzzer-Logo-Web.png" alt="logo"/>
            </Typography>
            
      <Box m = {1} p ={2}>
        {/* <Link to = "/reportbug"> */}
        <Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
      Report Bug
        </Button>
        {/* </Link> */}
      {/* <Link to="/Q&A"> */}
        <Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
        Q&A
        </Button>
        {/* </Link> */}
      {/* <Link to="bountycompaigns"> */}
        <Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
        Bounty Campaign
        </Button>
        {/* </Link> */}
      {/* <Link to="hireexperts"> */}
        <Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
        Hire Experts  </Button>
        {/* </Link> */}
      
      </Box>
             
            </Toolbar>
      </AppBar>
      <Grid container display="column" alignItems="center" justifyContent='center' >
<Grid item>

<Typography fontSize={40} fontWeight='bold'  align="center" mt={23}> 
Community sourced <span style={{color:'#D82148'}}>Bug reporting</span> and <span style = {{color:'#D82148'}}>Q&A</span> Platform
     </Typography>
     <Typography style={{margin:'91px', marginLeft:'14px', marginTop: '13px',
    marginRight: '-19px',
    marginBottom: '21px',
    }}>
     Not only Security Bugs are risky and create roadblock for the growth of the product but Functional Bugs to bad UI/UX can lead to decline in on baording new users and retaining existing users. 
     </Typography>

</Grid>
</Grid>
      </>   
 
    )
}

export default Dashboard