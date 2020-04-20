import React, { Component } from 'react';
import Search from './components/Search';

class App extends Component {
  state = {
    search: '',
  };

  handleSearch = (search) => {
    this.setState({ search });
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Search Images</p>
          <Search handleSearch={this.handleSearch} />
        </div>
      </div>
    );
  }
}

export default App;
