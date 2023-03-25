import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./StyledButton";

const Button = ({ onBtnClick }) => {
  return <ButtonStyled onClick={onBtnClick}>Load more</ButtonStyled>;
};

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};

export default Button;
