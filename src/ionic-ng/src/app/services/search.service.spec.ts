import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchService } from './search.service';

export function getSearchServiceSpy(methods: string[] | undefined = undefined) {
  const mockedMethods = methods || ['getSearchIndexData'];

  const spy: jasmine.SpyObj<SearchService> = jasmine.createSpyObj(
    'SearchService',
    mockedMethods
  );

  return spy;
}

export function getSearchServiceStub(
  methods: string[] | undefined = undefined
) {
  const spy = getSearchServiceSpy(methods);

  spy.getSearchIndexData.and.resolveTo({
    documents: [],
    index: {
      version: '2.3.9',
      fields: [],
      fieldVectors: [],
      invertedIndex: [],
      pipeline: [],
    },
  });

  return spy;
}

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
