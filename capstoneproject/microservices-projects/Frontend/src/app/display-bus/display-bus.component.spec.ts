import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBusComponent } from './display-bus.component';

describe('DisplayBusComponent', () => {
  let component: DisplayBusComponent;
  let fixture: ComponentFixture<DisplayBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayBusComponent]
    });
    fixture = TestBed.createComponent(DisplayBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
