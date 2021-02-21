import { Component, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/_class/Messeges/Category';
import { PaginatorFilterClass } from './PaginatorFilterClass';
import { DataService } from 'src/app/_services/data.service';
import { Output, Input } from '@angular/core';
import { MessagesService } from 'src/app/_services/messages.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {

  constructor(private dataService: DataService, private mgService: MessagesService, private Cookie: CookieService) { }

  @Input() totalMessages!: number;

  @Output() newPaginator = new EventEmitter<PaginatorFilterClass>();

  ngOnInit(): void {
    this.getCategories().subscribe(data => this.categories = data);
    this.dataService.currentPaginator.subscribe(data => this.loadInitPaginatorFilter(data));
  }

  ngAfterViewInit(): void {

    this.newPaginator.emit(this.PaginatorFilter);

  }

  ngOnChanges(changes: SimpleChanges) {

    for (const propName in changes) {
      const chng = changes[propName];
      const current = JSON.stringify(chng.currentValue);
      this.changeTotalMessagesNumber(current);
    }
  }

  categories!: Category[];
  selectedCategories!: Category[];
  PaginatorFilter!: PaginatorFilterClass;
  searchText!: string;


  setNewPaginator(event: any) {
    this.PaginatorFilter.pageSize = event.pageSize;
    this.PaginatorFilter.length = event.length;
    this.PaginatorFilter.pageIndex = event.pageIndex;
    this.PaginatorFilter.previousPageIndex = event.previousPageIndex;
    this.dataService.changePaginator(this.PaginatorFilter);
    this.newPaginator.emit(this.PaginatorFilter);
  }

  setNewSearchText(event: any) {

    this.PaginatorFilter.search = event;
    this.dataService.changePaginator(this.PaginatorFilter);
    this.newPaginator.emit(this.PaginatorFilter);

  }

  setNewSearchCategories(event: any) {

    this.PaginatorFilter.categories = event;
    this.dataService.changePaginator(this.PaginatorFilter);
    this.newPaginator.emit(this.PaginatorFilter);

  }

  loadInitPaginatorFilter(paginator: PaginatorFilterClass) {

    this.PaginatorFilter = paginator;
    this.selectedCategories = paginator.categories;
    this.searchText = paginator.search;

  }

  getCategories(): Observable<Category[]> {

    return this.mgService.getCategories(this.Cookie.get('user_name'));

  }

  changeTotalMessagesNumber(number: any) {

    this.totalMessages = number;

  }

}
