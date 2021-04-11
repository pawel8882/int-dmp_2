import { Timestamp } from 'rxjs';
import { Message } from './Message';
import { SuggestPerson } from './SuggestPerson';
import { MessageType } from './_enum/MessageType';

export interface DisplayMessage {

  messageId: number;
  title: string;
  timestamp: string;
  category: string;
  opened: boolean;
  messageType: MessageType;
  id: number;
  pinned: boolean;

  toPersons: SuggestPerson[];
  dwPersons: SuggestPerson[];
}
