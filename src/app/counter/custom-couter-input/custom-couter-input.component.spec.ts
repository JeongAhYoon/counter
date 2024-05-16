import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCouterInputComponent } from './custom-couter-input.component';

describe('CustomCouterInputComponent', () => {
  let component: CustomCouterInputComponent;
  let fixture: ComponentFixture<CustomCouterInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCouterInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCouterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
