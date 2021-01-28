import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinMessagesComponent } from './pin-messages.component';

describe('PinMessagesComponent', () => {
  let component: PinMessagesComponent;
  let fixture: ComponentFixture<PinMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
