import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePComponent } from './schedule.component';

describe('ScheduleComponent', () => {
  let component: SchedulePComponent;
  let fixture: ComponentFixture<SchedulePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
