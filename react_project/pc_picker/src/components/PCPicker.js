import React, { useState, useRef, useEffect } from "react";
import styles from "./PCPicker.module.css";
import Summary from "./Summary";

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

const options = {
  CPU: ["Intel i5-12400", "Intel i7-13700K", "AMD Ryzen 5 5600X", "AMD Ryzen 7 5800X"],
  GPU: ["NVIDIA RTX 3060", "NVIDIA RTX 4070", "AMD RX 6700XT", "AMD RX 7900XTX"],
  RAM: ["16GB DDR4 3200MHz", "32GB DDR5 6000MHz", "64GB DDR5 6400MHz"],
  Storage: ["1TB NVMe SSD", "2TB SATA SSD", "4TB HDD"]
};

export default function PCPicker() {
  const [selectedComponents, setSelectedComponents] = useState({});
  const buildRef = useRef(null);

  const handleSelection = (category, option) => {
    setSelectedComponents((prev) => ({ ...prev, [category]: option }));
  };

  const handleReset = () => {
    setSelectedComponents({});
  };

  const isBuildComplete = Object.keys(options).every((key) => selectedComponents[key]);

  // Scroll to build section when build is completed
  useEffect(() => {
    if (isBuildComplete && buildRef.current) {
      buildRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isBuildComplete]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PC Picker</h1>

      <div className={styles.grid}>
        {Object.keys(options).map((category) => (
          <div key={category} className={styles.card}>
            {icons[category]}
            <h2 className={styles.category}>{category}</h2>
            <select
              className={styles.dropdown}
              value={selectedComponents[category] || ""}
              onChange={(e) => handleSelection(category, e.target.value)}
            >
              <option value="">Select {category}</option>
              {options[category].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <Summary selectedComponents={selectedComponents} />

      <button className={styles.resetBtn} onClick={handleReset}>
        🔄 Reset Build
      </button>

      {isBuildComplete && (
        <div ref={buildRef} className={styles.pcImageContainer}>
          <h2 className={styles.buildTitle}>🖥️ Your Full Setup is Ready!</h2>
          <img
            src="/images/pc.jpg"
            alt="Full PC"
            className={styles.pcImage}
          />
          <p className={styles.description}>
            Congratulations! You've successfully built your custom PC with a{" "}
            <strong>{selectedComponents.CPU}</strong>,{" "}
            <strong>{selectedComponents.GPU}</strong>,{" "}
            <strong>{selectedComponents.RAM}</strong>, and{" "}
            <strong>{selectedComponents.Storage}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}
