import React, { useEffect } from 'react';
import paper from 'paper';

import './WhiteBoard.css'
const Whiteboard = () => {
  useEffect(() => {
    // Initialize Paper.js
    paper.setup(document.getElementById('whiteboard'));

    let path;

    const onMouseDown = (event) => {
      path = new paper.Path();
      path.strokeColor = 'black';
      path.strokeWidth = 2;
      path.add(event.point);
    };

   
    const onMouseDrag = (event) => {
        if (path) {
          const lastPoint = path.lastSegment.point;
          const newPoint = event.point;
      
          // Calculate the control point for a quadratic Bezier curve
          const controlPoint = lastPoint.add(newPoint).divide(2);
      
          // Add a quadratic Bezier curve to the path
          path.add(newPoint);
          path.lastSegment.handleIn = controlPoint;
          path.lastSegment.handleOut = controlPoint;
      
          // Add a smooth point to the path
          path.smooth({
            type: 'continuous',
            points: [path.segments[path.segments.length - 3].point, lastPoint, newPoint],
          });
        }
      };
      

    const onMouseUp = () => {
      if (path) {
        path.simplify(10); // Make the path smoother
        path = null;
      }
    };

    // Attach event listeners
    paper.view.onMouseDown = onMouseDown;
    paper.view.onMouseDrag = onMouseDrag;
    paper.view.onMouseUp = onMouseUp;

    // Clean up Paper.js on component unmount
    return () => {
      paper.remove();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <canvas id="whiteboard" resize style={{ border: '1px solid #000', display: 'block', margin: '0 auto' }}></canvas>
  );
};

export default Whiteboard;
