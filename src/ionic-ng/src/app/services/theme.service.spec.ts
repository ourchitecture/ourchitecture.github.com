import { TestBed } from '@angular/core/testing';

import { Storage } from '@ionic/storage';

import { ThemeService } from './theme.service';

export function getThemeServiceSpy(methods: string[] | undefined = undefined) {
  const mockedMethods = methods || ['initialize', 'getIsDarkModeEnabled'];

  const spy: jasmine.SpyObj<ThemeService> = jasmine.createSpyObj(
    'ThemeService',
    mockedMethods
  );

  return spy;
}

export function getThemeServiceStub(methods: string[] | undefined = undefined) {
  const spy = getThemeServiceSpy(methods);

  spy.initialize.and.resolveTo();

  spy.getIsDarkModeEnabled.and.returnValue(true);

  return spy;
}

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Storage],
    });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
