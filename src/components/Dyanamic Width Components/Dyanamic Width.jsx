import React, { useState } from "react";

const appStyle = {
  display: "flex",
  height: "100vh",
  position: "relative",
};

const leftStyle = {
  backgroundColor: "red",
  padding: "10px",
  boxSizing: "border-box",
  maxWidth:'60rem',
};
const rightStyle = {
  backgroundColor: "blue",
  padding: "10px",
  boxSizing: "border-box",
};

const middleStyle = {
  width: "2px",
  backgroundColor: "black",
  cursor: "ew-resize", // Set cursor for resizing
  position: "relative",
};


const topLabelStyle = {
  position: "absolute",
  top: "-30px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "rgba(255, 0, 0, 0.8)",
  padding: "5px",
  borderRadius: "5px",
};

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [difference, setDifference] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      setStartX(e.clientX);

      // Calculate the difference from the middle div based on deltaX
      const newDifference = difference + deltaX;
      setDifference(newDifference);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={appStyle}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div style={{ ...leftStyle, width: `calc(50% + ${difference}px)` }}>
        <div>a</div>
      </div>
      <div
        style={middleStyle}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {isDragging && (
          <div style={topLabelStyle}>X Traversal: {difference}</div>
        )}
      </div>
      <div style={{ ...rightStyle, width: `calc(50% - ${difference}px)` }}>
        <div>b</div>
      </div>
    </div>
  );
}

export default App;
