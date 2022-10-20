import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CardBar from './Cardbar';
import BasicModal from './BasicModal';
import ImgMediaCard0 from './ImgMediaCard0';
import ImgMediaCard1 from './ImgMediaCard1';
import ImgMediaCard2 from './ImgMediaCard2';
import ImgMediaCard3 from './ImgMediaCard3';
import ImgMediaCard4 from './ImgMediaCard4';
import ImgMediaCard5 from './ImgMediaCard5';




// import Modal from '@mui/material/Modal';
// import SpringModal from './SpringModal';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ScrollTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box className='px-5 sm:overflow-hidden sm:pr-10 sm:t-4 sm:flex'>
        <Tabs value={value} onChange={handleChange} variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
          <Tab label="Item Eight" {...a11yProps(7)} />
          <Tab label="Item Nine" {...a11yProps(8)} />
          <Tab label="Item Ten" {...a11yProps(9)} />
          <Tab label="Item Eleven" {...a11yProps(10)} />
          <Tab label="Item Twelve" {...a11yProps(11)} />
          <Tab label="Item Thirteen" {...a11yProps(12)} />
          <Tab label="Item fourteen" {...a11yProps(13)} />
        </Tabs>
        
        <BasicModal />
        
      </Box>
      <CardBar value={value} index={0}>
      <ImgMediaCard0 />
      </CardBar>
      <CardBar value={value} index={1}>
      <ImgMediaCard1 />
      </CardBar>
      <CardBar value={value} index={2}>
      <ImgMediaCard2 />
      </CardBar>
      <CardBar value={value} index={3}>
      <ImgMediaCard3 />
      </CardBar>
      <CardBar value={value} index={4}>
      <ImgMediaCard4 />
      </CardBar>
      <CardBar value={value} index={5}>
      <ImgMediaCard5 />
      </CardBar>
      <CardBar value={value} index={6}>
      <ImgMediaCard0 />
      </CardBar>
      <CardBar value={value} index={7}>
      <ImgMediaCard0 />
      </CardBar>
      <CardBar value={value} index={8}>
      <ImgMediaCard0 />
      </CardBar>
      <CardBar value={value} index={9}>
      <ImgMediaCard0 />
      </CardBar>
      <CardBar value={value} index={10}>
      <ImgMediaCard0 />
      </CardBar>
      <CardBar value={value} index={12}>
      <ImgMediaCard0 />
      </CardBar>
    </Box>
  );
}
