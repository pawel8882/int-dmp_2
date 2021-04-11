import { Timestamp } from 'rxjs';
import { Message } from './Message';
import { SuggestPerson } from './SuggestPerson';
import { MessageType }  from './_enum/MessageType';

export interface DetailedMessage {

  header: string;
  message: Message;
  owner: SuggestPerson;
  messageType: MessageType;
  id: number;
  pinned: boolean;

  toPersons: SuggestPerson[];
  dwPersons: SuggestPerson[];

}
