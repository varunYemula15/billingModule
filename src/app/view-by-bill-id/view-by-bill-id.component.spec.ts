import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByBillIdComponent } from './view-by-bill-id.component';

describe('ViewByBillIdComponent', () => {
  let component: ViewByBillIdComponent;
  let fixture: ComponentFixture<ViewByBillIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByBillIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByBillIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
