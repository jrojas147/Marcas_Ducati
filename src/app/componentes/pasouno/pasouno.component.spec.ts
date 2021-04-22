import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasounoComponent } from './pasouno.component';

describe('PasounoComponent', () => {
  let component: PasounoComponent;
  let fixture: ComponentFixture<PasounoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasounoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
