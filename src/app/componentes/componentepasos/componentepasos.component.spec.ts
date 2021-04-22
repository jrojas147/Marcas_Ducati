import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentepasosComponent } from './componentepasos.component';

describe('ComponentepasosComponent', () => {
  let component: ComponentepasosComponent;
  let fixture: ComponentFixture<ComponentepasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentepasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentepasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
