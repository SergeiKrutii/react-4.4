import React from "react";
import PropTypes from "prop-types";
import { StyledLi } from "./StyledImageGallaryItem";

const ImageGalleryItem = ({ images, getLargeImg }) => {
  return (
    <>
      {images.map(({ id, webformatURL }) => (
        <StyledLi key={id} id={id} onClick={getLargeImg}>
          <img className="item-image" src={webformatURL} alt="" />
        </StyledLi>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  getLargeImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
