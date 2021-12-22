import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="form-outline mb-4">
        <input
          onChange={this.props.searchMovieProp}
          type="search"
          className="form-control"
          placeholder="Search"
        />
      </div>
    );
  }
}

export default SearchBar;
