import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingTimeComponent } from './logging-time.component';

describe('LoggingTimeComponent', () => {
  let component: LoggingTimeComponent;
  let fixture: ComponentFixture<LoggingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggingTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
