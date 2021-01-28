import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMessageComponent } from './one-message.component';

describe('OneMessageComponent', () => {
  let component: OneMessageComponent;
  let fixture: ComponentFixture<OneMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
