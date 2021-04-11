import { MessageType } from './_enum/MessageType';

export interface UpdateMessage {

  messageId: number;
  messageType: MessageType;
  id: number;
  pinned: boolean;


}
