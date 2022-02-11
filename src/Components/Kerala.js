import React,{Component} from 'react';
import axios from 'axios';
import { Accordion , Card , Button} from 'react-bootstrap';

class Kerala extends Component{
    constructor(props){
        super(props);
        this.state = {
            districtData : []
        }
    }

componentDidMount(){

    axios.get('	https://keralastats.coronasafe.live/latest.json') .then(response =>{

   this.setState({districtData : response.data})
  // console.log(response.data);
    });

}

render(){

    
     let districts  = this.state.districtData.summary;
     let district_list = [];

     for(let x in  districts){
        let ob = districts[x];
        ob["district_name"] = x ;
        district_list.push(ob);

     }

    console.log(districts);
    return(
        <div className="row">
        <div className="col-md-12">
        
        <Card>
       
         
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
                                          </tbody>
                                      </table>
                                      
                                  </Card.Body>
                                </Card>
         </div>
         </div>  
    )

}


}
export default Kerala
