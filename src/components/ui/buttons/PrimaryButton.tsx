/** @author Staff Software Engineer */
import React from 'react';

const PrimaryButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className="primary-button">
      {children}
    </button>
  );
};

export default PrimaryButton;