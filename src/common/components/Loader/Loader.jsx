import React from "react";
import { ThreeDots } from "react-loader-spinner";
const StyledLoader = {
  marginLeft: "auto",
  marginRight: "auto",
};

const Loader = (props) => {
  return <ThreeDots wrapperStyle={StyledLoader} />;
};

export default Loader;
