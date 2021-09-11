import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBillsByDateComponent } from './view-all-bills-by-date.component';

describe('ViewAllBillsByDateComponent', () => {
  let component: ViewAllBillsByDateComponent;
  let fixture: ComponentFixture<ViewAllBillsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllBillsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllBillsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
