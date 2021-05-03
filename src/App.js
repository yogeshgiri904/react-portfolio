import './App.css';
import Header from './components/Header';
import Special from './components/Special';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Special/>
      <Qualification/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
