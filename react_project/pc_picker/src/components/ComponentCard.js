import React from "react";
import { motion } from "framer-motion";
import { FaMicrochip, FaMemory, FaHdd, FaDesktop } from "react-icons/fa";
import styles from "./ComponentCard.module.css";

import styles from "./PCPicker.module.css";

const iconStyle = {
  width: "100%",
  height: "100%",
  objectFit: "contain"
};

const icons = {
  CPU: (
    <div style={{ width: "250px", height: "200px" }}>
      <img src="/images/cpu.jpeg" alt="CPU" style={iconStyle} />
    </div>
  ),
  GPU: (
    <div style={{ width: "250px", height: "200px" }}>
      <img src="/images/gpuuuu.jpeg" alt="GPU" style={iconStyle} />
    </div>
  ),
  RAM: (
    <div style={{ width: "250px", height: "200px" }}>
      <img src="/images/am.png" alt="RAM" style={iconStyle} />
    </div>
  ),
  Storage: (
    <div style={{ width: "250px", height: "200px" }}>
      <img src="/images/storage.avif" alt="Storage" style={iconStyle} />
    </div>
  )
};



export default function ComponentCard({ category, options, onSelect }) {
  return (
    <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
      {icons[category]}
      <h2 className={styles.category}>{category}</h2>
      <select className={styles.dropdown} onChange={(e) => onSelect(category, e.target.value)}>
        <option value="">Select {category}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </motion.div>
  );
}
