import React , {Component} from  'react';
import axios from 'axios';
import { Accordion , Card , Button} from 'react-bootstrap';


class State extends Component {

    constructor(props){
        super(props); 
        this.state = {
            stateData : {

            }
        }
    }

    componentDidMount(){
        axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {

        
        this.setState({stateData : response.data})
        })
    }

    render(){
        let keys = Object.keys(this.state.stateData);
        return(

            <div className="row">
                <div className="col-md-12">
                <Accordion>
                    {
                        keys.map((itm,k)=>{

                            let districts = this.state.stateData[itm].districtData;
                            let district_keys = Object.keys(districts);
                            let total_active = 0;
                            let total_deaths= 0;
                            let total_recover = 0;
                            let total_confirmed = 0;

                            let district_list = [];

                            for(let x in  districts){
                                total_active += districts[x].active;
                                total_deaths += districts[x].deceased;
                                total_recover += districts[x].recovered;
                                total_confirmed += districts[x].confirmed;
                                let ob = districts[x];
                                ob["district_name"] = x ;
                                district_list.push(ob);
                            }
                            //console.log(district_list);
                            return(
                                <Card>
                                <Card.Header>
                                  <Accordion.Toggle as={Button} variant="primary" eventKey={k}>
                                    {itm} <span className="btn-dark p-1 mr-2"> Total Cases - {total_confirmed} </span> <span className="btn-dark p-1 mr-2">Active {total_active}</span> <span className="btn-dark p-1 mr-2">Recovery {total_recover}</span>
                                    <span className="btn-dark p-1 mr-2"> Total Death {total_deaths} </span>
                                  </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={k}>
                                  <Card.Body>
                                      <table className="table table-bordered table-striped">
                                          <thead>
                                              <tr>
                                                  <td>District</td>
                                                  <td>Confirmed</td>
                                                  <td>Active</td>
                                                  <td>Recovery</td>
                                                  <td>Death</td>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              {
                                                  district_list.map((itm,k)=>{

                                                    return(
                                                        <tr>
                                                            <td>{itm.district_name}</td>
                                                            <td>{itm.confirmed}</td>
                                                            <td>{itm.active}</td>
                                                            <td>{itm.recovered}</td>
                                                            <td>{itm.deceased}</td>
                                                        </tr>
                                                    )

                                                  })
                                              }
                                              <tr></tr>
                                          </tbody>
                                      </table>
                                      
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            )
                        })
                    }
 
  
</Accordion>
                </div>

            </div>
        )
    }
}
export default State