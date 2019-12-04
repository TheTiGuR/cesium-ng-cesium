import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMapsComponent } from './ng-maps.component';

describe('NgMapsComponent', () => {
  let component: NgMapsComponent;
  let fixture: ComponentFixture<NgMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
