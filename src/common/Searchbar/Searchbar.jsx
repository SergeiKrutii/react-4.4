import PropTypes from "prop-types";
import { Component } from "react";
import { StyledHeader } from "./StyledSearchBar";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  inputChange = (e) => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;

    if (query === "") {
      alert("Введите что искать");
      return;
    }

    this.props.onSubmit(query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <StyledHeader>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <button className="search-button" type="submit">
            <span className="search-span">Search</span>
          </button>

          <input
            className="search-input"
            onChange={this.inputChange}
            type="text"
            name="query"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </StyledHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
