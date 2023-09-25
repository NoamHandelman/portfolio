import { motion, useTransform } from 'framer-motion';
import { FC, useRef } from 'react';
import TechItem from './tech-item';
import { useScroll } from 'framer-motion';

interface ProjectItemProps {
  name: string;
  description: string;
  links: {
    live: string;
    client: string;
    server: string;
  };
  techStack: string[];
  image: string;
}

const ProjectItem: FC<ProjectItemProps> = ({
  name,
  description,
  links,
  techStack,
  image,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <a
          href={links.live}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 z-10"
        ></a>
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="mt-2 mb-4 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {techStack.map((tech, index) => (
              <TechItem key={index} tech={tech} />
            ))}
          </ul>
        </div>

        <img
          src={image}
          alt={name}
          className="absolute hidden sm:block bottom-0 h-[20rem] -right-40 w-[28.75rem] rounded-t-lg shadow-2xl
          transition
             group-hover:scale-[1.04]
         group-hover:-translate-x-3
            group-hover:translate-y-3
           group-hover:-rotate-2

          group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
         group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40
          "
        />
      </article>
    </motion.div>
  );
};

export default ProjectItem;
