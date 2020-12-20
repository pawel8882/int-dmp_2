import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektNaviComponent } from './projekt-navi.component';

describe('ProjektNaviComponent', () => {
  let component: ProjektNaviComponent;
  let fixture: ComponentFixture<ProjektNaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektNaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
