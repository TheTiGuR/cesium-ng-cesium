import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcMapComponent } from './gc-map.component';

describe('GcMapComponent', () => {
  let component: GcMapComponent;
  let fixture: ComponentFixture<GcMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
