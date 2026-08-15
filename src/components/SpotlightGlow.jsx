import React, { useState, useEffect } from 'react';

export function SpotlightGlow() {
  const [position, setPosition] = useState({ x: -500, y: -500 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="spotlight-glow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity,
      }}
    />
  );
}
