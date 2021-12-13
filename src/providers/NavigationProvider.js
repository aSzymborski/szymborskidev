import React, { useState, useEffect } from 'react';

export const NavigationContext = React.createContext({
  open: '',
  setOpen: () => {},
  toggleMenu: () => {},
  widthSize: '',
  setWidthSize: () => {},
  scrollToTop: () => {},
});

export const NavigationProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [widthSize, setWidthSize] = useState('');

  useEffect(() => {
    //Add eventlistener
    window.addEventListener('resize', handleResize());
  }, []);

  //Function to toggle open/close mobile menu
  const toggleMenu = () => {
    setOpen(!open);
  };

  //Handle to call eventlistener resize
  const handleResize = () => {
    setWidthSize(window.innerWidth);
  };

  //Handle to call scrollTop
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavigationContext.Provider
      value={{
        open,
        setOpen,
        toggleMenu,
        widthSize,
        setWidthSize,
        scrollToTop,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
