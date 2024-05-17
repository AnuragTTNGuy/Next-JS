// components/Navigation.tsx

import React from 'react';
import Link from 'next/link';
import navigationRoutes from '../data/navigationRoutes';

const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4">
        {navigationRoutes.map((route, index) => (
          <li key={index}>
            <Link href={route.path} className="text-blue-500 hover:underline">
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
