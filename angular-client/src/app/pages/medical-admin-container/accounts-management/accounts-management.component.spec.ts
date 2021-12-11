import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsManagementComponent } from './accounts-management.component';

describe('AccountsManagementComponent', () => {
  let component: AccountsManagementComponent;
  let fixture: ComponentFixture<AccountsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
