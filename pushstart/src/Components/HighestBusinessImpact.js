import React from 'react';
import Badge from '@atlaskit/badge';


const HighestBusinessImpact = () => {
    return (
        <div style={{textAlign:'left',marginLeft: '15px', marginTop:'10px', height:'100%', overflow: 'scroll'}}>
          <div style={{fontSize: '14px'}}>Premium less than zero <span style={{float:"right",marginRight:"10px",fontSize:"17px",color:'#DE350C'}}>$1500.00</span><Badge appearance={{backgroundColor: '#D0021C',textColor: 'white'}}>HIGH</Badge>
          <div style={{marginTop: '-3px', fontSize: '10px', marginBottom: '-20px', color:'#9B9B9B'}}>MARKETING WORKFLOW 1</div>
          </div><br/>
          <div style={{fontSize: '14px'}}>Sum insured less than zero <span style={{float:"right",marginRight:"10px",fontSize:"17px",color:'#DE350C'}}>$1500.00</span><Badge appearance={{backgroundColor: '#D0021C',textColor: 'white'}}>HIGH</Badge>
          <div style={{marginTop: '-3px', fontSize: '10px', marginBottom: '-20px', color:'#9B9B9B'}}>MARKETING WORKFLOW 1</div>
          </div><br/>
          <div style={{fontSize: '14px'}}>Incorrect city names & address <span style={{float:"right",marginRight:"10px",fontSize:"17px",color:'#F49B00'}}>$1500.00</span><Badge appearance={{backgroundColor: '#F49B00',textColor: 'white'}}>MEDIUM</Badge>
          <div style={{marginTop: '-3px', fontSize: '10px', marginBottom: '-20px', color:'#9B9B9B'}}>MARKETING WORKFLOW 1</div>
          </div><br/>
          <div style={{fontSize: '14px'}}>Discharge date before admssion date <span style={{float:"right",marginRight:"10px",fontSize:"17px",color:'#DE350C'}}>$1500.00</span><Badge appearance={{backgroundColor: '#D0021C',textColor: 'white'}}>HIGH</Badge>
          <div style={{marginTop: '-3px', fontSize: '10px', marginBottom: '-20px', color:'#9B9B9B'}}>MARKETING WORKFLOW 1</div>
          </div><br/>
          <div style={{fontSize: '14px'}}>Wrong Telephone numbers <span style={{float:"right",marginRight:"10px",fontSize:"17px",color:'#E3D300'}}>$1500.00</span><Badge appearance={{backgroundColor: '#E3D300',textColor: 'white'}}>LOW</Badge>
          <div style={{marginTop: '-3px', fontSize: '10px', marginBottom: '-20px', color:'#9B9B9B'}}>MARKETING WORKFLOW 1</div>
          </div>
        </div>
    );
}
export default HighestBusinessImpact;