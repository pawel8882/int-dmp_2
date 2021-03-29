import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DisplayMessage } from 'src/app/_class/Messeges/DidsplayMessages';
import { PaginatorFilterClass } from '.././projekt-navi/messages/paginator/PaginatorFilterClass';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  /*START: MESSAGE DATA*/

  public messageData!: DisplayMessage;
  public subject = new Subject<DisplayMessage>();
  private messageIdSource = new BehaviorSubject(this.messageData);
  currentMessageData = this.messageIdSource;

  changeMessageData(messageData: DisplayMessage) {

    this.messageIdSource.next(messageData);

  }

/*END: MESSAGE DATA*/

/*START: PAGINATOR DATA*/

  public Paginator: PaginatorFilterClass = { search: '', length: 100, pageIndex: 0, pageSize: 10, previousPageIndex: 0, categories: [] };
  public PaginatorSubject = new Subject<PaginatorFilterClass>();
  private PaginatorSubjectSource = new BehaviorSubject(this.Paginator);
  currentPaginator = this.PaginatorSubjectSource.asObservable();
  changePaginator(paginator: PaginatorFilterClass) {

    this.PaginatorSubjectSource.next(paginator);

  }


/*END: PAGINATOR DATA*/
}
