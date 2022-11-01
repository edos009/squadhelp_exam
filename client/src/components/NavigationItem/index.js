import React, { useState } from "react";

import CONSTANTS from "../../constants";
import SubNavigation from "../SubNavigation";

import styles from "./NavigationItem.module.scss";

const NavigationItem = ({ item, index, navigation }) => {
  const [isSubNavActive, setIsSubNavActive] = useState(false);
  return (
    <li
      className={styles.nav_item}
      onMouseOver={() => setIsSubNavActive(true)}
      onMouseOut={() => setIsSubNavActive(false)}
    >
      <span>{item.name}</span>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
      <SubNavigation
        navigation={navigation}
        item={item}
        index={index}
        isSubNavActive={isSubNavActive}
      />
    </li>
  );
};

export default NavigationItem;
