import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDispalyBusComponent } from './admin-dispaly-bus.component';

describe('AdminDispalyBusComponent', () => {
  let component: AdminDispalyBusComponent;
  let fixture: ComponentFixture<AdminDispalyBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDispalyBusComponent]
    });
    fixture = TestBed.createComponent(AdminDispalyBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
