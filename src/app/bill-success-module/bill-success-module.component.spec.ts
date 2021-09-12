import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSuccessModuleComponent } from './bill-success-module.component';

describe('BillSuccessModuleComponent', () => {
  let component: BillSuccessModuleComponent;
  let fixture: ComponentFixture<BillSuccessModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillSuccessModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillSuccessModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
