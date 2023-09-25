import { projectsList } from '@/lib/data';
import Header from '../ui/header';
import ProjectItem from './project-item';
import { useSectionInView } from '@/lib/hooks/use-section-in-view';

const ProjectsList = () => {
  const { ref } = useSectionInView('Projects', 0.8);

  return (
    <section
      ref={ref}
      id="projects"
      className="flex flex-col justify-center items-center my-12"
    >
      <Header>Projects</Header>
      {projectsList.map((project) => (
        <ProjectItem {...project} key={project.name} />
      ))}
    </section>
  );
};

export default ProjectsList;
