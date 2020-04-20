import React, { Component } from 'react';

class Search extends Component {
  SearchRef = React.createRef();

  handleData = (e) => {
    e.preventDefault();
    const search = this.SearchRef.current.value;
    this.props.handleSearch(search);
  };

  render() {
    return (
      <form onSubmit={this.handleData}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.SearchRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Search Image"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Search"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
