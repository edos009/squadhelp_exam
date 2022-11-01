import React from "react";
import cx from "classnames";

import styles from "./SubNavigation.module.scss";
import SubNavigationItem from "../SubNavigationItem";

const SubNavigation = ({ navigation, item, index, isSubNavActive }) => {
  return (
    <ul
      className={cx(
        styles.sub_nav,
        {
          [styles.last_sub_nav]: index + 1 === navigation.length,
        },
        { [styles.sub_nav_active]: isSubNavActive }
      )}
    >
      {item.items.map(({ item_name, path }, index) => (
        <SubNavigationItem
          item={item}
          item_name={item_name}
          path={path}
          index={index}
          key={item_name}
        />
      ))}
    </ul>
  );
};

export default SubNavigation;
