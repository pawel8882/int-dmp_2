import { DataMessages } from './DataMessages';
import { Message } from './Message';
import { Header } from './Header';
import { SuggestPerson } from './SuggestPerson';
import Delta from 'quill-delta';

export class NewMessage {

  content: string = "";
  header: string = "";
  toPersons: SuggestPerson[] = [];
  dwPersons: SuggestPerson[] = [];


}
