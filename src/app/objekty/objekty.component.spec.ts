import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektyComponent } from './objekty.component';

describe('ObjektyComponent', () => {
  let component: ObjektyComponent;
  let fixture: ComponentFixture<ObjektyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjektyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjektyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
