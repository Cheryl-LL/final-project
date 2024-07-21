'use client'

import React from 'react';

const TopMenu = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-2 flex justify-end space-x-2">
        {children}
      </div>
    </div>
  );
};

export default TopMenu;