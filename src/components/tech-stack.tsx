import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { techStack } from '@/lib/data';
import Header from './ui/header';
import { useSectionInView } from '@/lib/hooks/use-section-in-view';
import { motion } from 'framer-motion';

const TechStack = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.05 }}
      ref={ref}
      className="relative my-12"
      id="skills"
    >
      <Header>Skills</Header>

      <Carousel
        className="mt-14"
        showArrows={true}
        autoPlay={true}
        interval={2000}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        stopOnHover={true}
        swipeable={true}
      >
        {techStack.map((icon, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={icon.svg} alt={icon.name} className="w-16 h-16" />
            <p className="rounded-xl text-sm p-2 mt-6 font-semibold bg-gray-100 dark:bg-white/10">
              {icon.name.toUpperCase()}
            </p>
          </div>
        ))}
      </Carousel>
    </motion.section>
  );
};

export default TechStack;
