import { CardMembershipSharp } from "@mui/icons-material";
import React from "react";
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

// export default function Cardbar(props){

   export default function TabPanel(props) {
        const { children, value, index, ...other } = props;

        TabPanel.propTypes = {
            children: PropTypes.node,
            index: PropTypes.number.isRequired,
            value: PropTypes.number.isRequired,
          };
    
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                {children}
              </Box>
            )}
          </div>
        );
      }
      
      
    // return(

    //     <div>
    //     <img src="img/gallexy.png props.imag"></img>
    //     </div>

    // )
// }