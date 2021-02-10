import { Message } from './Message';

export interface Header {

  id: number;
  date: string;
  title: string;
  concerns: string;

  message: Message;

}
