import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByIdComponent } from './by-id.component';

describe('ByIdComponent', () => {
  let component: ByIdComponent;
  let fixture: ComponentFixture<ByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
