import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumerRegistrationComponent } from './custumer-registration.component';

describe('CustumerRegistrationComponent', () => {
  let component: CustumerRegistrationComponent;
  let fixture: ComponentFixture<CustumerRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustumerRegistrationComponent]
    });
    fixture = TestBed.createComponent(CustumerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
