import React from "react";
import styles from "./Summary.module.css";

export default function Summary({ selectedComponents }) {
  return (
    <div className={styles.summary}>
      <h2>💻 Your PC Build</h2>
      <ul>
        {Object.entries(selectedComponents).map(([category, option]) => (
          <li key={category}>
            <strong>{category}:</strong> {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
