import React from "react";

import NavigationItem from "../NavigationItem";

import styles from "./Navigation.module.scss";

const navigation = [
  {
    name: "name ideas",
    items: [
      { item_name: "beauty", path: "/" },
      { item_name: "consulting", path: "/" },
      { item_name: "e-commerce", path: "/" },
      { item_name: "fashion & clothing", path: "/" },
      { item_name: "finance", path: "/" },
      { item_name: "real estate", path: "/" },
      { item_name: "tech", path: "/" },
      { item_name: "more categories", path: "/" },
    ],
  },
  {
    name: "contest",
    items: [
      { item_name: "how it work", path: "/" },
      { item_name: "pricing", path: "/" },
      { item_name: "agency service", path: "/" },
      { item_name: "active contest", path: "/" },
      { item_name: "winners", path: "/" },
      { item_name: "leader board", path: "/" },
      { item_name: "tech", path: "/" },
      { item_name: "become a creative", path: "/" },
    ],
  },
  {
    name: "our work",
    items: [
      { item_name: "names", path: "/" },
      { item_name: "taglines", path: "/" },
      { item_name: "logos", path: "/" },
      { item_name: "testimonials", path: "/" },
    ],
  },
  {
    name: "names for sale",
    items: [
      { item_name: "popular names", path: "/" },
      { item_name: "short names", path: "/" },
      { item_name: "intriguing names", path: "/" },
      { item_name: "names by category", path: "/" },
      { item_name: "visual name search", path: "/" },
      { item_name: "sell your domains", path: "/" },
    ],
  },
  {
    name: "blog",
    items: [
      { item_name: "ultimate naming guide", path: "/" },
      { item_name: "poetic devices in business naming", path: "/" },
      { item_name: "crowded bar theory", path: "/" },
      { item_name: "all articles", path: "/" },
    ],
  },
];

const Navigation = () => {
  return (
    <div className={styles.nav_wrapper}>
      <ul className={styles.nav}>
        {navigation.map((item, index) => (
          <NavigationItem
            item={item}
            index={index}
            navigation={navigation}
            key={item.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
