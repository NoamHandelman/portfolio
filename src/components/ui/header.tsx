import { ReactNode, FC } from 'react';

interface HeaderProps {
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <h2 className="text-2xl font-bold relative text-center my-8 pt-14 mb-10">
      {children}
      <span className="h-1 w-20 bg-gray-400 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 dark:bg-white"></span>
    </h2>
  );
};

export default Header;
