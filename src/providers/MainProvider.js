import React, { useState, useLayoutEffect, useEffect } from 'react';
import axios from 'axios';

export const MainContext = React.createContext({
  open: '',
  setOpen: () => {},
  toggleMenu: () => {},
  scrollToTop: () => {},
  checked: '',
  index: '',
  size: '',
  aboutMe: [],
  setAboutMe: () => {},
  portfolioItems: [],
  setPortfolioItems: () => {},
  handleNavigationMenuItemIndex: () => {},
});

export const MainProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState(0);
  const [aboutMe, setAboutMe] = useState([]);
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.post(
        'https://graphql.datocms.com/',
        {
          query: `
        {
          allPortfolios {
            id
            title
            technologyStack
            link
            backgroundGradient
            photo {
              url
            }
          },
          allAboutmeHeaders {
            id
            header
            skills
            passion
          }
        }`,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        }
      );
      setAboutMe(data.data.allAboutmeHeaders);
      setPortfolioItems(data.data.allPortfolios);
    } catch (err) {
      console.error(err);
    }
  };

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
    <MainContext.Provider
      value={{
        open,
        setOpen,
        toggleMenu,
        scrollToTop,
        checked,
        index,
        handleNavigationMenuItemIndex,
        size,
        aboutMe,
        portfolioItems,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
