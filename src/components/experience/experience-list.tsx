import { experienceList } from '@/lib/data';
import ExperienceItem from './experience-item';
import Header from '../ui/header';
import { useSectionInView } from '@/lib/hooks/use-section-in-view';
import { motion } from 'framer-motion';

const ExperienceList = () => {
  const { ref } = useSectionInView('Experience');

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="experience"
      className="flex flex-col justify-center hover:px-4 items-center gap-10 w-[min(100%,28rem)] self-center"
    >
      <Header>Experience</Header>
      {experienceList.map((experience) => (
        <ExperienceItem {...experience} key={experience.title} />
      ))}
    </motion.section>
  );
};

export default ExperienceList;
