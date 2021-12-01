import React, { useState, useEffect } from 'react';

export const NavigationContext = React.createContext({
  open: '',
  setOpen: () => {},
  innerWidth: '',
  setInnerWidth: () => {},
  toggleMenu: () => {},
});

export const NavigationProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(false);

  useEffect(() => {
    const innerWidthValue = window.innerWidth;
    if (innerWidthValue > 999) {
      setInnerWidth(true);
    }
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <NavigationContext.Provider
      value={{
        open,
        setOpen,
        toggleMenu,
        innerWidth,
        setInnerWidth,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
