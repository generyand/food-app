import React from "react";
import Item from "./Item";
import styles from "./itemlist.module.css";

export default function ItemList({ food, isLoading }) {
  return (
    <div className={styles.ingredientsContainer}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <Item item={item}/>
        ))
      )}
    </div>
  );
}
