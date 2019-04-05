import React from 'react';


const ActivityStream = () => {
    return (
        <div style={{textAlign:'left',marginLeft: '15px', marginTop:'10px', height:'100%', overflow: 'scroll'}}>
          <div style={{fontSize: '14px'}}><i className="far fa-code-branch fa-rotate-90 default-color"></i> Workflow - Marketing data 1 <span style={{float:"right",marginRight:"10px",fontSize:"14px",color:'#9B9B9B'}}>Today</span>
          <div style={{marginLeft:'24px',marginTop: '-3px', fontSize: '10px', marginBottom: '-23px', color:'#9B9B9B'}}>Finished running and 10,000 errors have been detected</div>
          </div><br />
          <div style={{fontSize: '14px'}}><i className="far fa-server default-color"></i>Data Library - earthquakes.csv added <span style={{float:"right",marginRight:"10px",fontSize:"14px",color:'#9B9B9B'}}>Today</span>
          <div style={{marginLeft:'24px',marginTop: '-3px', fontSize: '10px', marginBottom: '-23px', color:'#9B9B9B'}}>earthquakes.csv added and data profiling begun</div>
          </div><br />
          <div style={{fontSize: '14px'}}><i className="far fa-comment-dots default-color"></i>@deleeps tagged you in a comment <span style={{float:"right",marginRight:"10px",fontSize:"14px",color:'#9B9B9B'}}>Today</span>
          <div style={{marginLeft:'24px',marginTop: '-3px', fontSize: '10px', marginBottom: '-23px', color:'#9B9B9B'}}>Have a look at this dataset and see if it...more></div>
          </div><br />
          <div style={{fontSize: '14px'}}><i className="far fa-bug default-color"></i>Error - 10,000 errors detected <span style={{float:"right",marginRight:"10px",fontSize:"14px",color:'#9B9B9B'}}>Today</span>
          <div style={{marginLeft:'24px',marginTop: '-3px', fontSize: '10px', marginBottom: '-23px', color:'#9B9B9B'}}>New errors detected in Marketing data 1</div>
          </div><br />
          <div style={{fontSize: '14px'}}><i className="far fa-play-circle default-color"></i>Job - Marketing data 1 successfully run <span style={{float:"right",marginRight:"10px",fontSize:"14px",color:'#9B9B9B'}}>Today</span>
          <div style={{marginLeft:'24px',marginTop: '-3px', fontSize: '10px', marginBottom: '-23px', color:'#9B9B9B'}}>Finished running and 10,000 errors have been detected</div>
          </div>
        </div>
    );
}
export default ActivityStream;