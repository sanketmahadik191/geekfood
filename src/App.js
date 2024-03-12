import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid'
import GridSection from './components/GridSection';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Hero></Hero>
     <CardGrid></CardGrid>
    <GridSection></GridSection>
    <Footer></Footer>
    </div>
  );
}

export default App;
