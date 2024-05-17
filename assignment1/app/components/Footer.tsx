// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center text-sm mt-8">
      <p>&copy; {currentYear} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
