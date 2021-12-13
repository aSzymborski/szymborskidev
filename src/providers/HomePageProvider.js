import React from 'react';

export const HomePageContext = React.createContext({});

export const HomePageProvider = ({ children }) => {
  return (
    <HomePageContext.Provider value={{}}>{children}</HomePageContext.Provider>
  );
};
