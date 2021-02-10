import { MenuItem } from 'primeng/api';

export interface Department {
  id: number;
  name: string;
  description: string;

  menu: MenuItem[];

}
