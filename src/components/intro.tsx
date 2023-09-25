import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import image from '@/assets/images/intro-image.jpeg';
import { useSectionInView } from '@/lib/hooks/use-section-in-view';

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5);

  return (
    <section
      ref={ref}
      className="flex flex-col justify-center items-center mt-24"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <img
              src={image}
              alt="my image"
              width="192"
              height="192"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 125,
          delay: 0.1,
          duration: 0.7,
        }}
        className="text-2xl font-bold tracking-wider mt-6 sm:text-4xl"
      >
        Hi, I'm Noam Handelman!
      </motion.h1>
      <TypeAnimation
        sequence={[
          'I Am A Full Stack Developer',
          1000,
          'I Am A Backend Developer',
          1000,
          'I Am A Frontend Developer',
          1000,
          'I Am A Software Engineer',
          1000,
        ]}
        speed={40}
        style={{ fontSize: '1.6em' }}
        repeat={Infinity}
      />
    </section>
  );
};

export default Intro;
