import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './components/about/About';
import Proyects from './components/proyects/Proyects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={About}/>
        <Route path ="/proyect" component={Proyects}/>
        <Route path ="/contact" component={Contact}/>
      </Switch>
      
    </div>
  );
}

export default App;
