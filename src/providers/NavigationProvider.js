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
    //Add eventlistener
    window.addEventListener('resize', handleResize());
  }, []);

  //Function to toggle open/close mobile menu
  const toggleMenu = () => {
    setChecked(!checked);
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

  //Handle to show navigation menu item index
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
