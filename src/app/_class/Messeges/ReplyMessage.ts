import Delta from 'quill-delta';
import { SuggestPerson } from './SuggestPerson';

export interface ReplyMessage {

  id: number;
  timestamp: string;
  content: Delta;
  owner: SuggestPerson;

}
