import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDUCATIONComponent } from './education.component';

describe('EDUCATIONComponent', () => {
  let component: EDUCATIONComponent;
  let fixture: ComponentFixture<EDUCATIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDUCATIONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EDUCATIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
