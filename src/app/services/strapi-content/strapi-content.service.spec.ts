import { TestBed } from '@angular/core/testing';

import { StrapiContentService } from './strapi-content.service';

describe('StrapiContentService', () => {
  let service: StrapiContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrapiContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
