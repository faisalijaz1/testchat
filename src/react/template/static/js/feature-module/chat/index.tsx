import React, { useState, useEffect } from 'react';
import MobileIndex from './MobileIndex.tsx';
import WebIndex from './WebIndex.tsx';
import { useLocation } from 'react-router-dom';
const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const contactId = searchParams.get('phoneno');
  const contactName = searchParams.get('contactName');
  const [selectedContact, setSelectedContact] = useState(null);
  useEffect(() => {
       // Ensure `location.state` is checked
      //  if (contactId) {
        setSelectedContact({ id: id,phone:contactId, name: contactName });
      // }
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, [location.state]);

  return isMobile ? <MobileIndex /> : <WebIndex contactinfo={selectedContact} />;
};

export default Index;
