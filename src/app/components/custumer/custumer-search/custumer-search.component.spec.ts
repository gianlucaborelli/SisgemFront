import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumerSearchComponent } from './custumer-search.component';

describe('CustumerSearchComponent', () => {
  let component: CustumerSearchComponent;
  let fixture: ComponentFixture<CustumerSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustumerSearchComponent]
    });
    fixture = TestBed.createComponent(CustumerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
