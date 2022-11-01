import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import styles from "./SubNavigationItem.module.scss";

const SubNavigationItem = ({ item, item_name, index, path }) => {
  return (
    <li
      className={cx(styles.sub_nav_item, {
        [styles.last]: index + 1 === item.items.length,
      })}
    >
      <Link to={path}>{item_name}</Link>
    </li>
  );
};

export default SubNavigationItem;
