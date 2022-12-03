import { Container,  } from '@mui/material';
import { useEffect } from 'react';
// import theme from './Styles/theme';
import './App.css';
import Appbar from './Components/Appbar';

function App() {
  useEffect(()=>{
    document.title="React-material-Home-Page"
  },[])
  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
    <Container
     >
<Appbar/>
{/* <Button  variant='contained'>Test</Button> */}
    </Container>
    {/* </ThemeProvider> */}
   </>
    );
}

export default App;
