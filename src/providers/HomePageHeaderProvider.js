import React, { useEffect, useState } from 'react';

export const HomePageHeaderContext = React.createContext({
  size: '',
  setSize: () => {},
});

export const HomePageHeaderProvider = ({ children }) => {
  const [size, setSize] = useState('');
  console.log(size);

  useEffect(() => {
    window.addEventListener('scroll', changeSize);
  }, []);

  const changeSize = () => {
    const scrollValue = window.scrollY;
    setSize(scrollValue);
  };

  return (
    <HomePageHeaderContext.Provider value={{ size, setSize }}>
      {children}
    </HomePageHeaderContext.Provider>
  );
};
