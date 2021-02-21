import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PaginatorFilterClass } from '.././projekt-navi/messages/paginator/PaginatorFilterClass';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  /*START: MESSAGE ID DATA*/

  public messageId: number = 0;
  public subject = new Subject<any>();
  private messageIdSource = new BehaviorSubject(this.messageId);
  currentMessageId = this.messageIdSource.asObservable();

  changeMessageId(id: number) {

    this.messageIdSource.next(id);

  }

/*END: MESSAGE ID DATA*/

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
