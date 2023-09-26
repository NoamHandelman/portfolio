import { FC } from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  dates: string;
  description: readonly string[];
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  title,
  company,
  dates,
  description,
}) => {
  return (
    <article className="flex flex-col shadow-xl  bg-gray-100 dark:bg-white/10 text-black dark:text-white p-4 rounded-md hover:scale-110 active:scale-110 transition dark:shadow-white/10">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h3 className="font-bold text-xl">
            {title}, <span>{company}</span>
          </h3>
        </div>
        <time className="text-lg mb-4">{dates}</time>
      </div>
      {description.map((point, i) => {
        return (
          <p className="text-lg" key={i}>
            • {point}
          </p>
        );
      })}
    </article>
  );
};

export default ExperienceItem;
