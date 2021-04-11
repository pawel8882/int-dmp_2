import { DataMessages } from './DataMessages';
import { MessageType } from './_enum/MessageType';

export interface ReceivedMessages {
  id: number;
  messageType: MessageType;
  category: string;
  opened: boolean;

  dataMessages: DataMessages[];

}
