import { ProjectDetails } from './ProjectDetails';

export interface Project {
  id: number;
  name: string;
  complete: boolean;
  number: string;

  details: ProjectDetails[];
}
