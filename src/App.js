import React from 'react';
import NavBar from './components/NavBar'
import About from './components/About'
import Proyects from './components/proyects/Proyects'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Proyects/>
      <Contact/>
    </div>
  );
}

export default App;
