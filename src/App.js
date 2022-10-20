import './App.css';
import Topbar from './components/Topbar';
// import Slidebar from './components/Slidebar';
import ScrollTabs from './components/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BasicModal from './components/BasicModal';
// import SwipeableTextMobileStepper from './components/SwipeableTextMobileStepper';
import MapButton from './components/MapButton';
import ImageSlider from './components/ImageSlider';
// import ImageSlider from './components/ImageSlider';

// import GlobalStyles from '@mui/material/GlobalStyles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ef5350',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Topbar />
        <ScrollTabs />
        <MapButton />
      </div>  
    </ThemeProvider>
  );
}

export default App;
