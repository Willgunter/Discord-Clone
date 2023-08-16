import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerColumnComponent } from './server-column.component';

describe('ServerColumnComponent', () => {
  let component: ServerColumnComponent;
  let fixture: ComponentFixture<ServerColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerColumnComponent]
    });
    fixture = TestBed.createComponent(ServerColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
