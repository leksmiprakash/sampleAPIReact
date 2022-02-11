import axios from 'axios';
import React , {Component} from  'react';
import {Card} from 'react-bootstrap';
import State from './State';

class India extends Component {
    constructor(props){
        super(props);
        this.state = {
            countryData : []
        }
    }


componentDidMount(){
    axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{

    this.setState({countryData : response.data})

 })
}
    render(){
        return(

            <div className="row">
                <div className="Col-md-12">
                    
                    <h3>INDIA</h3>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                        <Card className="badge badge-info" style={{ width: '18rem',background: 'blue' }}>
  
  <Card.Body className="text-center">
    <Card.Title>TOTAL CASES</Card.Title>
    <h3>{this.state.countryData.cases}</h3>
    <Card.Text>
     [Today:{this.state.todayCases}]
    </Card.Text>
    
  </Card.Body>
  </Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-info" style={{ width: '18rem',background: '#ffc107' }}>
  
  <Card.Body className="text-center">
    <Card.Title>ACTIVE CASES</Card.Title>
    <Card.Text>
     [Today:25]
    </Card.Text>
    
  </Card.Body>
  </Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-info" style={{ width: '18rem',background: 'green' }}>
  
  <Card.Body className="text-center">
    <Card.Title>RECOVERY</Card.Title>
    <Card.Text>
     [Today:25]
    </Card.Text>
    
  </Card.Body>
  </Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-info" style={{ width: '18rem',background: 'red' }}>
  
  <Card.Body className="text-center">
    <Card.Title>DEATH</Card.Title>
    <Card.Text>
     [Today:25]
    </Card.Text>
    
  </Card.Body>
  </Card>
                        </div>



                    </div>
                </div>

                <div className="col-md-12">
                    <State />
                </div>
            </div>
        )
    }
}
export default India