import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGradsComponent } from './post-grads.component';

describe('PostGradsComponent', () => {
  let component: PostGradsComponent;
  let fixture: ComponentFixture<PostGradsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostGradsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostGradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
