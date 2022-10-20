import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function Slidebar(){

        const [value, setValue] = React.useState(0);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
          console.log(newValue);
        };

    return(
        <div className="pl-5 sm:pr-4 sm:pt-5">
        <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
          <Tab label="Item eight" />
          <Tab label="Item nine" />
          <Tab label="Item Ten" />
          <Tab label="Item eleven" />
          <Tab label="Item twelve" />
          <Tab label="Item thirteen" />
          <Tab label="Item fourteen" />
          <Tab label="Item fifteen" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
          
        </Tabs>
      </Box>
      </div>
    )
}


