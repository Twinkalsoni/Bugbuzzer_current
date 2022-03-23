import React from 'react'
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Bugs from './components/Bugs';
import Compaigns from './components/Compaigns';
import QandAList from './components/QandAList';
import BountyWinners from './components/BountyWinners';
import Footer from './components/Footer';
// import DetailBounties from './components/DetailBounties';
// import DetailQandA from './components/DetailQandA';
// import {
//     BrowserRouter as Router,
//      Routes,
//   Route,
//   Link
// }from "react-router-dom";
// import DashBoard from './Dashboard'

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
{/* <DashBoard /> */}

  {/* <Routes>
          {/* <Route path="/Q&A" element={<QandAList />}/>  */}

          {/* <Route path="/bounty" element={<DetailBounties />} />
        </Routes> 
         </Router> } */}

 </>

    )
}

export default App

  {/* <Routes>
          {/* <Route path="/Q&A" element={<QandAList />}/>  */}

          {/* <Route path="/bounty" element={<DetailBounties />} />
        </Routes> 
         </Router> } */}

 </>

    )
}

export default App
