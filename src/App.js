import React, { Component } from 'react';
import Search from './components/Search';
import Results from './components/Results';

class App extends Component {
  state = {
    search: '',
    images: [],
  };

  prevPage = () => {
    console.log('prev...');
  };

  nextPage = () => {
    console.log('next...');
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
        <div className="row justify-content-center">
          <Results
            images={this.state.images}
            prevPage={this.prevPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
