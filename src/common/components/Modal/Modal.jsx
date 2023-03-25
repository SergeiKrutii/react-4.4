import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyledModal } from "./StyledModal";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
  }
  onKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.keyCloseModal();
    }
  };

  render() {
    const { openModal, image } = this.props;
    return createPortal(
      <StyledModal onClick={openModal}>
        <div className="modal">
          <img src={image} alt="" />
        </div>
      </StyledModal>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  openModal: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};
