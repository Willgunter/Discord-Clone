import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserColumnComponent } from './user-column.component';

describe('UserColumnComponent', () => {
  let component: UserColumnComponent;
  let fixture: ComponentFixture<UserColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserColumnComponent]
    });
    fixture = TestBed.createComponent(UserColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
