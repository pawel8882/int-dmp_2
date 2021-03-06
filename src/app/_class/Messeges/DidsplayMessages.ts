import { Timestamp } from 'rxjs';
import { Message } from './Message';
import { SuggestPerson } from './SuggestPerson';

export interface DisplayMessage {

  messageId: number;
  title: string;
  timestamp: string;
  category: string;
  opened: boolean;
  type: string;
  id: number;
  pinned: boolean;

  toPersons: SuggestPerson[];
  dwPersons: SuggestPerson[];
}
