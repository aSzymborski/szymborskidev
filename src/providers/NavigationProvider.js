import React, { useState, useLayoutEffect } from 'react';

export const NavigationContext = React.createContext({
  open: '',
  setOpen: () => {},
  toggleMenu: () => {},
  scrollToTop: () => {},
  checked: '',
  index: '',
  size: '',
  handleNavigationMenuItemIndex: () => {},
});

export const NavigationProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState(0);

  const useWindowSize = () => {
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }

      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  };

  const toggleMenu = () => {
    setChecked(!checked);
    setOpen(!open);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleNavigationMenuItemIndex = (index) => {
    setIndex(index);
  };

  useWindowSize();

  return (
    <NavigationContext.Provider
      value={{
        open,
        setOpen,
        toggleMenu,
        scrollToTop,
        checked,
        index,
        handleNavigationMenuItemIndex,
        size,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
