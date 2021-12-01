import { Navigation } from 'components/organisms/Navigation/Navigation';
import { NavigationProvider } from 'providers/NavigationProvider';
import React from 'react';
import { HomePage } from '../HomePage/HomePage';

export const MainTemplate = () => {
  return (
    <>
      <NavigationProvider>
        <Navigation />
      </NavigationProvider>
      <HomePage />
    </>
  );
};
