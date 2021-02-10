import { Timestamp } from 'rxjs';
import { Header } from './Header';
import { SuggestPerson } from './SuggestPerson';

export interface DataMessages {

  id: number;
  personName: string;
  personLastName: string;

  header: Header[];
  persons: SuggestPerson[];

}
