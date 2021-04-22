import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasodosComponent } from './pasodos.component';

describe('PasodosComponent', () => {
  let component: PasodosComponent;
  let fixture: ComponentFixture<PasodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
