import Delta from 'quill-delta';

export interface MessageContentDisplay {

  owner: string;
  timestamp: string;
  content: Delta;

}
