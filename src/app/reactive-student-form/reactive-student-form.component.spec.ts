import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveStudentFormComponent } from './reactive-student-form.component';

describe('ReactiveStudentFormComponent', () => {
  let component: ReactiveStudentFormComponent;
  let fixture: ComponentFixture<ReactiveStudentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveStudentFormComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveStudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
