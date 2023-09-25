import { FC } from 'react';

interface TechItemProps {
  tech: string;
}

const TechItem: FC<TechItemProps> = ({ tech }) => {
  return (
    <li
      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
      key={tech}
    >
      {tech}
    </li>
  );
};

export default TechItem;
