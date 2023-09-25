import { FC, Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { SectionName } from '@/lib/types';
import { useActiveSection } from '../../context/section-provider';

interface LinkItemProps {
  name: SectionName;
  hash: string;
  isActive: boolean;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
}

const LinkItem: FC<LinkItemProps> = ({
  name,
  hash,
  isActive,
  setActiveSection,
}) => {
  const { setTimeOfLastClick } = useActiveSection();
  return (
    <motion.li
      onClick={() => {
        setActiveSection(name);
        setTimeOfLastClick(Date.now());
      }}
      className={clsx(
        'h-3/4 flex items-center justify-center relative rounded-full'
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <a
        href={hash}
        className={clsx(
          'flex items-center justify-center px-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
          {
            'text-gray-950': isActive,
            'dark:text-white': isActive,
          }
        )}
      >
        {name}
        {isActive && (
          <motion.span
            className="bg-gray-300 rounded-full absolute inset-0 -z-10 dark:bg-white/10"
            layoutId="activeSection"
            transition={{
              type: 'spring',
              stiffness: 380,
              damping: 30,
            }}
          ></motion.span>
        )}
      </a>
    </motion.li>
  );
};

export default LinkItem;
