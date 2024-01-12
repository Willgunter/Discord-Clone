import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLeftComponent } from './main-left.component';

describe('MainLeftComponent', () => {
  let component: MainLeftComponent;
  let fixture: ComponentFixture<MainLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainLeftComponent]
    });
    fixture = TestBed.createComponent(MainLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
