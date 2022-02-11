import React ,{Component} from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Item from './Item';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import{

  BrowserRouter as  Router,
  Switch,
  Route,
  Link

} from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);
  }


render(){
  return(
    <Router>
      <div>
        <Button variant="danger">Click</Button>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/contact" >Contact</Link>
          </li>
          <li>
            <Link to="/item/1">Item1</Link>
          </li>
          <li>
            <Link to="/item/2">Item2</Link>
          </li>
          <li>
            <Link to="/item/3">Item3</Link>
          </li>

        </ul>
      </div>

    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/Contact"><Contact /></Route>
      <Route path="/item/:id"><Item/></Route>
    </Switch>


    </Router>
  )
}


}

export default App;
