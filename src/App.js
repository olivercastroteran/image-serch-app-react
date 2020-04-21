import React, { Component } from 'react';
import Search from './components/Search';
import Results from './components/Results';

class App extends Component {
  state = {
    search: '',
    images: [],
  };

  consultAPI = () => {
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.search}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => this.setState({ images: data.hits }));
  };

  handleSearch = (search) => {
    this.setState({ search }, () => this.consultAPI());
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Search Images</p>
          <Search handleSearch={this.handleSearch} />
        </div>
        <Results images={this.state.images} />
      </div>
    );
  }
}

export default App;
