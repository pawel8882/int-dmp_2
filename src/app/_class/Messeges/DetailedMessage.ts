import { Timestamp } from 'rxjs';
import { Message } from './Message';
import { SuggestPerson } from './SuggestPerson';

export interface DetailedMessage {

  header: string;
  message: Message;
  owner: SuggestPerson;
  type: string;
  id: number;
  pinned: boolean;

  toPersons: SuggestPerson[];
  dwPersons: SuggestPerson[];

}
