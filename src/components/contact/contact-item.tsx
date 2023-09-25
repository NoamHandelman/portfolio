import { FC } from 'react';

interface ContactItemProps {
  name: string;
  Icon: FC<Record<string, unknown>>;
  link: string;
}

const ContactItem: FC<ContactItemProps> = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-125 active:scale-125  transition"
    >
      <Icon size={30} />
    </a>
  );
};

export default ContactItem;
