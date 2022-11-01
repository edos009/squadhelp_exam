import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CONSTANTS from "../../constants.js";

import styles from "./Logo.module.scss";

const Logo = ({ to, src, alt }) => (
  <Link to={to} className={styles.logo}>
    <img src={src} alt={alt} />
  </Link>
);

Logo.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

Logo.defaultProps = {
  to: "/",
  src: `${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`,
  alt: "logo",
};

export default Logo;
