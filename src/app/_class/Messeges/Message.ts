import Delta from 'quill-delta';

export interface Message {

  id: number;
  timestamp: string;
  content: Delta;

}
