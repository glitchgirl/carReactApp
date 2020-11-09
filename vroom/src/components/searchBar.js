import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div>
        <form>
          <label>Image Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
