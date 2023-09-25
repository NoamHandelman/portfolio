import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { techStack } from '@/lib/data';
import { MoveRight } from 'lucide-react';
import { MoveLeft } from 'lucide-react';
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
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title="Previous Slide"
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
            >
              <MoveLeft />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title="Next Slide"
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
            >
              <MoveRight />
            </button>
          )
        }
      >
        {techStack.map((icon, index) => (
          <div key={index}>
            <img src={icon} alt={`Slide ${index}`} className="w-16 h-16" />
          </div>
        ))}
      </Carousel>
    </motion.section>
  );
};

export default TechStack;
