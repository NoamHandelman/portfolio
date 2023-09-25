import { motion } from 'framer-motion';
import Header from './ui/header';
import { aboutMe } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks/use-section-in-view';

const AboutMe = () => {
  const { ref } = useSectionInView('About', 0.8);

  return (
    <motion.section
      ref={ref}
      className="flex flex-col justify-center items-center text-center mt-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Header>About Me</Header>
      <div className="flex w-80 sm:w-[36rem]">
        {' '}
        <p className="text-xl leading-relaxed">{aboutMe}</p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
