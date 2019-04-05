import React, { Component } from 'react';
import axios from 'axios'
import Badge from '@atlaskit/badge';


class AssignedToMe extends Component {
    state = {
        tasks: []
      }
  render() {
      
    return (
        <div style={{textAlign:'left',marginLeft: '15px', marginTop:'10px', height:'100%', overflow: 'scroll'}}>
        { this.state.tasks.map((task,i) =>
            <div key={i} style={{fontSize: '14px'}}>{task.taskTitle} <Badge appearance={{backgroundColor: task.color,textColor: 'white'}}>{task.status}</Badge>
            <div style={{marginTop: '-3px', fontSize: '10px', marginBottom: '-20px', color:'#9B9B9B'}}>{task.category}</div>
            <br/>
            </div>
        )}
          <div style={{fontSize: '14px'}}>Premium less than zero <Badge appearance={{backgroundColor: '#D0021C',textColor: 'white'}}>HIGH</Badge>
          <div style={{marginTop: '-3px', fontSize: '10px', marginBottom: '-20px', color:'#9B9B9B'}}>MARKETING WORKFLOW 1</div>
          </div><br />
          <div style={{fontSize: '14px'}}>Sum insured less than zero <Badge appearance={{backgroundColor: '#D0021C',textColor: 'white'}}>HIGH</Badge>
          <div style={{marginTop: '-3px', fontSize: '10px', marginBottom: '-20px', color:'#9B9B9B'}}>MARKETING WORKFLOW 1</div>
          </div><br />
          <div style={{fontSize: '14px'}}>Incorrect city names & address <Badge appearance={{backgroundColor: '#F49B00',textColor: 'white'}}>MEDIUM</Badge>
          <div style={{marginTop: '-3px', fontSize: '10px', marginBottom: '-20px', color:'#9B9B9B'}}>MARKETING WORKFLOW 1</div>
          </div><br />
          <div style={{fontSize: '14px'}}>Discharge date before admssion date <Badge appearance={{backgroundColor: '#D0021C',textColor: 'white'}}>HIGH</Badge>
          <div style={{marginTop: '-3px', fontSize: '10px', marginBottom: '-20px', color:'#9B9B9B'}}>MARKETING WORKFLOW 1</div>
          </div><br />
          <div style={{fontSize: '14px'}}>Wrong Telephone numbers <Badge appearance={{backgroundColor: '#E3D300',textColor: 'white'}}>LOW</Badge>
          <div style={{marginTop: '-3px', fontSize: '10px', marginBottom: '-20px', color:'#9B9B9B'}}>MARKETING WORKFLOW 1</div>
          </div>
        </div>
    );
  }

  
  
  

  componentDidMount = ()=> {
    axios.get(`http://localhost:4000/api/tasks`)
        .then(res => {
        var tasks = res.data;
        tasks.tasks.reverse().forEach(element => {
            if(element.status === 'LOW'){
                element['color'] = "#E3D300";
            } else if(element.status === "HIGH"){
                element['color'] = "#D0021C";
            } else{
                element['color'] = "#F49B00";
            }
        });
        this.setState(tasks);
        })
    }
}

export default AssignedToMe;
