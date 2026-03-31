import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      // Check for hover targets on every move for better reliability
      const target = e.target;
      if (target && target.closest('a, button, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveMouse);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-indigo-500 z-[9999] pointer-events-none hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-indigo-500 z-[9999] pointer-events-none hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          left: 12,
          top: 12,
        }}
      />
    </>
  );
};

export default CustomCursor;
