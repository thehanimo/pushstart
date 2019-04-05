import React, { Component } from 'react';
import './App.css';
import {Container, Row,Col,Card} from 'react-bootstrap';

import drawLineChart from "./Components/graph1";
import drawChart2 from "./Components/graph2";
import drawChart3 from "./Components/graph3";
import TopErrors from'./Components/TopErrors';
import HighestBusinessImpact from './Components/HighestBusinessImpact';
import ActivityStream from './Components/ActivityStream';
import AssignedToMe from './Components/AssignedToMe';

class Dashboard extends Component {
    lineChart = React.createRef()  
    state = {
        tasks: []
      }
  render() {
      
    return (
      <div>
      
      <div id="ghost"></div>
      <Container fluid>
      <Row style = {{ marginTop: '-20px'}}>
        <Col>
        <h6 style={{textAlign: 'left'}} id="lineChartHeader">Data Statistics <a style={{fontSize: '12px', float:'right',paddingTop:'8px', color: "#868C96", backgroundColor:'white',height:'30px',width:'90px',textAlign:'right'}} href="/admin">This month <i className="fas fa-chevron-down" style={{fontSize:"10px"}}></i></a></h6>
        <Card style={{ width: '100%', height:'230px', overflow:'hidden'}} id="lineChart" ref={this.lineChart}>
        </Card>
        </Col>
      </Row>
      <Row style = {{ marginTop: '10px'}}>
        <Col md="auto">
        <h6 style={{textAlign: 'left',width:'300px'}}>Data Quality Index <a style={{fontSize: '10px', float:'right',marginTop:'5px', color: "#1062BC"}} href="/admin">MORE></a></h6>
        <Card style={{ width: '300px', height:'200px' }} id="graph1">
        </Card>
        </Col>
        <Col>
        <h6 style={{textAlign: 'left',width:'100%'}}>Top Errors <a style={{fontSize: '10px', float: 'right',marginTop:'5px', color: "#1062BC"}} href="/admin">MORE></a></h6>
        <Card style={{ width: '100%', height:'200px' }}>
        <TopErrors />
        </Card>
        </Col>
        <Col>
        <h6 style={{textAlign: 'left',width:'100%'}}>Assigned To Me <a style={{fontSize: '10px', float: 'right',marginTop:'5px', color: "#1062BC"}} href="/admin">MORE></a></h6>
        <Card style={{ width: '100%', height:'200px' }}>
        <AssignedToMe/>
        </Card>
        </Col>
      </Row>
      <Row style = {{ marginTop: '10px'}}>
        <Col md="auto">
        <h6 style={{textAlign: 'left',width:'300px'}}>Business Impact <a style={{fontSize: '10px', float:'right',marginTop:'5px', color: "#1062BC"}} href="/admin">MORE></a></h6>
        <Card style={{ width: '300px', height:'210px' }} id="graph2">
        </Card>
        </Col>
        <Col>
        <h6 style={{textAlign: 'left',width:'100%'}}>Highest Business Impact <a style={{fontSize: '10px', float: 'right',marginTop:'5px', color: "#1062BC"}} href="/admin">MORE></a></h6>
        <Card style={{ width: '100%', height:'210px' }}>
        <HighestBusinessImpact />
        </Card>
        </Col>
        <Col>
        <h6 style={{textAlign: 'left',width:'100%'}}>Activity Stream <a style={{fontSize: '10px', float: 'right',marginTop:'5px', color: "#1062BC"}} href="/admin">MORE></a></h6>
        <Card style={{ width: '100%', height:'210px' }}>
        <ActivityStream/>
        </Card>
        </Col>
      </Row>
      </Container>
    </div>
    );
  }

  
  
  

  componentDidMount = ()=> {
    drawLineChart("#lineChart",this.lineChart.current.offsetWidth + 20);
    drawChart2("#graph1");
    drawChart3("#graph2");
    }
}

export default Dashboard;
