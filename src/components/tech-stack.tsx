import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { techStack } from '@/lib/data';
import Header from './ui/header';
import { useSectionInView } from '@/lib/hooks/use-section-in-view';
import { motion } from 'framer-motion';
import clsx from 'clsx';

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
          <div key={index} className="inline-block">
            <div
              className={clsx('rounded-full', {
                'bg-white': icon.name === 'nextjs',
              })}
            >
              <img src={icon.svg} alt={icon.name} className="w-16 h-16" />
            </div>
          </div>
        ))}
      </Carousel>
    </motion.section>
  );
};

export default TechStack;
