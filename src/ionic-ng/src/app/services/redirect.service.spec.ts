import { TestBed } from '@angular/core/testing';

import { RedirectService } from './redirect.service';

export function getRedirectServiceSpy(
  methods: string[] | undefined = undefined
) {
  const mockedMethods = methods || ['visit'];

  const spy: jasmine.SpyObj<RedirectService> = jasmine.createSpyObj(
    'RedirectService',
    mockedMethods
  );

  return spy;
}

export function getRedirectServiceStub(
  methods: string[] | undefined = undefined
) {
  const spy = getRedirectServiceSpy(methods);

  return spy;
}

describe('RedirectService', () => {
  let service: RedirectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
