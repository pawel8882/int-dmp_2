import { ProjektDetails } from './projektdetails';

export interface Projekt {
  id: number;
  name: string;
  complete: boolean;
  number: string;

  details: ProjektDetails[];
}
