import { useState, useEffect } from 'react';

const ResizableDrawer = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(40);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newPosition = (e.clientX / window.innerWidth) * 100;
      setPosition(newPosition);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="resizable-drawer">
      <div
        className="drawer-content"
        style={{ width: `${position}%` }}
      >
        <p>Drawer Content</p>
      </div>
      <div
        className="drawer-handle"
        onMouseDown={handleMouseDown}
        style={{ width: '1vh' }}
      ></div>
    </div>
  );
};

export default ResizableDrawer;
