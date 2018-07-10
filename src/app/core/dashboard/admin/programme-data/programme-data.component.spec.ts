import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeDataComponent } from './programme-data.component';

describe('ProgrammeDataComponent', () => {
  let component: ProgrammeDataComponent;
  let fixture: ComponentFixture<ProgrammeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
