import { Department } from './Department';

export interface SectionDepartments {
  id: number;
  section: string;
  description: string;

  departments: Department[];

}
