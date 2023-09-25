import { motion } from 'framer-motion';
import { ModeToggle } from './mode-toggle';
import { navLinks } from '@/lib/data';
import LinkItem from './link-item';
import { useActiveSection } from '../../context/section-provider';

const Navbar = () => {
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <header className="flex flex-row items-center justify-between p-4 z-[999] relative">
      <motion.div
        className=" fixed top-0 left-1/2 transform -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-gray-100 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      >
        <nav className="flex  items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex flex-wrap items-center justify-center  gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-auto sm:flex-nowrap sm:gap-5">
            {navLinks.map((link) => (
              <LinkItem
                key={link.hash}
                {...link}
                isActive={activeSection === link.name}
                setActiveSection={setActiveSection}
              />
            ))}
          </ul>
        </nav>
      </motion.div>
      <motion.div
        className="flex items-center fixed top-0 -right-1.5 mt-4"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      >
        <ModeToggle />
      </motion.div>
    </header>
  );
};

export default Navbar;
