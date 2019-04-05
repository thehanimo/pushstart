import React, { Component } from 'react';
import './App.css';
import AdminForm from './form'


class Admin extends Component {
  render() {
    return (
      <div style={{marginTop: "10vh"}}>
          <h2>Add A Task</h2>
      <AdminForm></AdminForm>
      </div>
    )
  }
}

export default Admin;
