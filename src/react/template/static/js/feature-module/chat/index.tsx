import React, { useState, useEffect } from 'react';
import MobileIndex from './MobileIndex.tsx';
import WebIndex from './WebIndex.tsx';

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileIndex /> : <WebIndex />;
};

export default Index;
