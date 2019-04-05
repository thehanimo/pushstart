import React from 'react'
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <a href="/dashboard"><h4>View Dashboard</h4></a>
        <a href="/Admin"><h4>View Admin</h4></a>
      </div>
    )
  }
}
export default App