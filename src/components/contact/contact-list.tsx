import { contactList } from '@/lib/data';
import ContactItem from './contact-item';
import { motion } from 'framer-motion';
import { ArrowDownFromLine } from 'lucide-react';
import { useActiveSection } from '../../context/section-provider';
import { MoveRight } from 'lucide-react';

const ContactList = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();
  return (
    <section className="flex flex-row justify-center items-center mt-6">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center justify-center space-y-8"
      >
        <div className="flex gap-4">
          <a
            href="#contact"
            className="group bg-gray-900 text-white text-[0.87rem] sm:text-base px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection('Contact');
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{' '}
            <MoveRight className="opacity-70 group-hover:translate-x-1 transition" />
          </a>
          <a
            className="group px-5 py-3 text-[0.87rem] sm:text-base flex rounded-full borderBlack hover:scale-110 active:scale-110  transition cursor-pointer dark:bg-gray-800 dark:outline-none"
            href="Noam-Handelman-CV.pdf"
            download
          >
            <div className="flex flex-row gap-4 items-center justify-center">
              <span className="text-md"> Download CV</span>
              <ArrowDownFromLine
                size={18}
                className="opacity-70 group-hover:translate-y-1 transition"
              />
            </div>
          </a>
        </div>

        <div className="flex flex-row gap-8">
          {' '}
          {contactList.map((contact) => (
            <ContactItem {...contact} key={contact.name} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactList;
