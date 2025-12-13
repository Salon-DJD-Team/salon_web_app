import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostsSectionV2Component } from './job-posts-section-v2.component';

describe('JobPostsSectionV2Component', () => {
  let component: JobPostsSectionV2Component;
  let fixture: ComponentFixture<JobPostsSectionV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPostsSectionV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostsSectionV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
