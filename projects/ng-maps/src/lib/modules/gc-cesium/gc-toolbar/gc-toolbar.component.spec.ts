import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcToolbarComponent } from './gc-toolbar.component';

describe('GcToolbarComponent', () => {
  let component: GcToolbarComponent;
  let fixture: ComponentFixture<GcToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
