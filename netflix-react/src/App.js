import { Container } from 'react-bootstrap';
import './App.css';
import Galleria1 from './components/Galleria1';
import Icons from './components/Icons';
import NavbarComp from './components/NavbarComp';
import Underbar from './components/Underbar';
import Galleria2 from './components/Galleria2';
import Galleria3 from './components/Galleria3';

function App() {
  return (
    <div className="App">
      <Container fluid >

        {/* ICONE DI FONTAWESOME */}
        <Icons />

        {/* APPLICAZIONE / SITO NETFLIX */}
        <NavbarComp />
        <Underbar />
        <Galleria1 />
        <Galleria2 />
        <Galleria3 />

      </Container>
    </div>
  );
}

export default App;
