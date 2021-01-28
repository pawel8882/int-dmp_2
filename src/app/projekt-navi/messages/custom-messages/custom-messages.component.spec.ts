import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMessagesComponent } from './custom-messages.component';

describe('CustomMessagesComponent', () => {
  let component: CustomMessagesComponent;
  let fixture: ComponentFixture<CustomMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
