import { Container, } from '@mui/material';
import { useEffect } from 'react';
// import theme from './Styles/theme';
import './App.css';
import Appbar from './Components/Appbar';
import Bannar from './Components/Bannar';
import Promotion from './Components/Promotion';

function App() {
  useEffect(() => {
    document.title = "React-material-Home-Page"
  }, [])
  return (
    <>

      <Container>
        <Appbar />
        <Bannar/>
        <Promotion/>
      </Container>

    </>
  );
}

export default App;
