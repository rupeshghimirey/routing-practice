import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Data from './components/Data';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/home">Home</Link>
      <Switch>
        <Route exact path='/home'>
          <h2 className="text-info">Welcome to the HomePage!</h2>
        </Route>
        <Route exact path = "/:id">
            <Data></Data>
        </Route>
        <Route exact path = "/:id/:color1">
            <Data></Data>
        </Route>
        <Route exact path = "/:id/:color1/:color2">
            <Data></Data>
        </Route>

        
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
