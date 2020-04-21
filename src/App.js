import React, { Component } from 'react';
import Search from './components/Search';
import Results from './components/Results';

class App extends Component {
  state = {
    search: '',
    images: [],
    page: '',
  };

  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start');
  };

  prevPage = () => {
    // 1. Read state
    let page = this.state.page;
    // 1.1. condition to first page
    if (page === 1) return null;
    // 2. Rest -1 to the page
    page--;
    // 3. Save change to the state
    this.setState({ page }, () => this.consultAPI());
    this.scroll();
  };

  nextPage = () => {
    // 1. Read state
    let page = this.state.page;
    // 2. Add +1 to the page
    page++;
    // 3. Save change to the state
    this.setState({ page }, () => this.consultAPI());
    this.scroll();
  };

  consultAPI = () => {
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.search}&page=${page}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => this.setState({ images: data.hits }));
  };

  handleSearch = (search) => {
    this.setState({ search, page: 1 }, () => this.consultAPI());
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
