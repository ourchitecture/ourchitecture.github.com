import { NgModule, ProviderToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { getSearchServiceStub } from './search.service.spec';

import { ThemeService } from './theme.service';
import { getThemeServiceSpy } from './theme.service.spec';

@NgModule({
  providers: [
    {
      provide: SearchService,
      useValue: getSearchServiceStub(),
    },
    {
      provide: ThemeService,
      useValue: getThemeServiceSpy(),
    },
  ],
})
export class StubbedServiceTestModule {}

export function getStubbedServiceSpy<T>(t: ProviderToken<T>) {
  const stub = TestBed.inject(t);
  const spy = stub as jasmine.SpyObj<T>;
  return spy;
}
