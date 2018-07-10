import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRoleMappingComponent } from './job-role-mapping.component';

describe('JobRoleMappingComponent', () => {
  let component: JobRoleMappingComponent;
  let fixture: ComponentFixture<JobRoleMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRoleMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRoleMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
