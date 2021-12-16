import React, { useState, useEffect } from 'react';

export const NavigationContext = React.createContext({
  open: '',
  setOpen: () => {},
  toggleMenu: () => {},
  widthSize: '',
  setWidthSize: () => {},
  scrollToTop: () => {},
  checked: '',
  index: '',
  handleNavigationMenuItemIndex: () => {},
});

export const NavigationProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [widthSize, setWidthSize] = useState('');
  const [checked, setChecked] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', handleResize());
  }, []);

  const toggleMenu = () => {
    setChecked(!checked);
    setOpen(!open);
  };

  const handleResize = () => {
    setWidthSize(window.innerWidth);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleNavigationMenuItemIndex = (index) => {
    setIndex(index);
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
        checked,
        index,
        handleNavigationMenuItemIndex,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
