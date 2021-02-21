import Delta from 'quill-delta';
import { ReplyMessage } from './ReplyMessage';

export interface Message {

  id: number;
  timestamp: string;
  content: Delta;

  replyMessages: ReplyMessage[];

}
