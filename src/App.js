import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Dogs from './Dog';
import Cats from './Cats';
import Babies from './Babies';

function App() {
  return (
<Router>
<div className="App">
      <header className="App-header">
        <h1>Caredom</h1>
        <img src="https://media.tenor.com/images/7fa27e2c706fcbea8a25ee54bb1d51d0/tenor.gif" />
        <Navbar />
        
        <Route exact path= '/' />
        <Route exact path= '/dogs' component= {Dogs}/>
        <Route exact path= '/cats' component= {Cats}/>
        <Route exact path= '/babies' component= {Babies}/>
        
        
      </header>
    </div>
</Router>
    
  );
}

export default App;
