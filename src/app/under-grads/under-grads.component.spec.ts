import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderGradsComponent } from './under-grads.component';

describe('UnderGradsComponent', () => {
  let component: UnderGradsComponent;
  let fixture: ComponentFixture<UnderGradsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderGradsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderGradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
