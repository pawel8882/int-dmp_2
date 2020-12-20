import { ProjektDetails } from './projektdetails';

export interface Projekt {
  projektID: number;
  name: string;
  isComplete: boolean;
  numer: string;

  projektDetails: ProjektDetails[];
}
