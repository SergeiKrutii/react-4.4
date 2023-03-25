import React, { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import styled from "styled-components";

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export default class App extends Component {
  state = {
    query: "",

    largeimage: null,
  };

  onSubmit = (newQuery) => {
    this.setState({ query: newQuery });
  };

  render() {
    const { query } = this.state;
    return (
      <StyledApp>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery query={query} />
      </StyledApp>
    );
  }
}
