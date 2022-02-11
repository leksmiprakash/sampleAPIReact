import React ,{Component} from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import{

  BrowserRouter as  Router,
  Switch,
  Route,
  Link

} from 'react-router-dom';

import Header from './Components/Header';
import India from './Components/India';
import State from './Components/State';
import World from './Components/World';
import Kerala from './Components/Kerala';

class App extends Component{
  constructor(props){
    super(props);
  }


render(){
  return(
    <div className="container-fluid">
     <Router>
       <Header />
       <Switch>
         <Route exact path="/"><India /></Route>
         <Route  path="/india"><India /></Route>
         <Route  path="/kerala"><Kerala /></Route>
       </Switch>
     </Router>
    </div>
  )
}


}

export default App;
