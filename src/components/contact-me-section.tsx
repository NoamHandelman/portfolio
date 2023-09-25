import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks/use-section-in-view';
import toast from 'react-hot-toast';
import Header from './ui/header';
import { FormEvent, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactMeSection = () => {
  const { ref } = useSectionInView('Contact');
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      if (formRef.current) {
        const result = await emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        );

        if (result.status === 200) {
          toast.success('Email sent successfully, thanks!');
        }
      }
    } catch (error) {
      console.log(error);

      toast.error('Something went wrong, please try again');
    } finally {
      if (inputRef.current && textareaRef.current) {
        inputRef.current.value = '';
        textareaRef.current.value = '';
      }
    }
    setIsLoading(false);
  };

  return (
    <div
      id="contact"
      ref={ref}
      className="flex flex-col items-center justify-center text-center mb-14"
    >
      <motion.section
        className="w-[min(100%,38rem)]"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <Header>Contact me</Header>

        <p className="text-gray-700 -mt-1 dark:text-white/80">
          Please contact me directly at{' '}
          <a className="underline" href="mailto:n.handelman6@gmail.com">
            n.handelman6@gmail.com
          </a>{' '}
          or through this form.
        </p>

        <form
          ref={formRef}
          className="mt-10 flex flex-col dark:text-black"
          onSubmit={handleEmail}
        >
          <input
            className="h-14 px-4 bg-gray-200 outline-none rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all "
            name="email"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            ref={inputRef}
          />
          <textarea
            className="h-52 my-3 bg-gray-200 outline-none rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all "
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
            ref={textareaRef}
          />
          <button
            className="group flex items-center self-start p-3 justify-center gap-4  bg-gray-700 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 hover:p-4"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <>
                {' '}
                <span className="font-medium"> submit</span>
                <Send
                  className="opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={18}
                />
              </>
            )}
          </button>
        </form>
      </motion.section>
    </div>
  );
};

export default ContactMeSection;
