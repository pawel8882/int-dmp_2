import { DataMessages } from './DataMessages';

export interface ReceivedMessages {
  id: number;
  type: string;
  category: string;
  opened: boolean;

  dataMessages: DataMessages[];

}
