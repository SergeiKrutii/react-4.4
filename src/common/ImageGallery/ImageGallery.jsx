import React, { Component } from "react";

import PropTypes from "prop-types";
import Loader from "../components/Loader";
import { StyledList } from "./StyledImageGallery";
import ImageGalleryItem from "../components/ImageGalleryItem/ImageGalleryItem";
import Fetch from "../api/api";
import Button from "../components/Button";
import Modal from "../components/Modal";

const getImage = new Fetch();

export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    largeImage: "",
    showModal: false,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { query } = this.props;

    if (prevProps.query !== query) {
      this.setState({ loading: true });
      getImage.pagination = 1;
      try {
        const { hits } = await getImage.dataFetch(query);
        this.setState({ images: hits });
      } catch (error) {
        alert(new Error("Somthing went wrong"));
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  onNextPage = async () => {
    getImage.pagination += 1;
    try {
      this.setState({ loading: true });
      const { hits } = await getImage.dataFetch(this.props.query);
      this.setState((prevState) => ({
        images: [...prevState.images, ...hits],
      }));
    } catch (error) {
      alert(new Error("Somthing went wrong"));
    } finally {
      this.setState({ loading: false });
    }
  };

  closeModal = (e) => {
    if (e.target.nodeName === "DIV") {
      this.toogleModal();
    }
  };

  toogleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  getLargeImg = (e) => {
    const imgId = Number(e.currentTarget.id);
    const findLargeImg = this.state.images.find((elem) => elem.id === imgId);

    this.setState({ largeImage: findLargeImg.largeImageURL });
    this.toogleModal();
  };

  render() {
    const { loading, showModal, largeImage, images } = this.state;
    return (
      <>
        {showModal && (
          <Modal
            image={largeImage}
            keyCloseModal={this.toogleModal}
            openModal={this.closeModal}
          />
        )}
        <StyledList>
          <ImageGalleryItem images={images} getLargeImg={this.getLargeImg} />
        </StyledList>
        {loading && <Loader />}
        {images.length > 1 && <Button onBtnClick={this.onNextPage} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};
