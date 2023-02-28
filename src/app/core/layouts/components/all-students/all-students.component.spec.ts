import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentsComponents } from './all-students.component';

describe('AllStudentsComponent', () => {
  let component: AllStudentsComponents;
  let fixture: ComponentFixture<AllStudentsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStudentsComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllStudentsComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
