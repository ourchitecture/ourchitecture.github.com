import { NgModule, ProviderToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { RedirectService } from './redirect.service';
import { getRedirectServiceSpy } from './redirect.service.spec';

import { SearchService } from './search.service';
import { getSearchServiceStub } from './search.service.spec';

import { ThemeService } from './theme.service';
import { getThemeServiceSpy } from './theme.service.spec';

import { TimerService } from './timer.service';
import { getTimerServiceSpy } from './timer.service.spec';

@NgModule({
  providers: [
    {
      provide: RedirectService,
      useValue: getRedirectServiceSpy(),
    },
    {
      provide: SearchService,
      useValue: getSearchServiceStub(),
    },
    {
      provide: ThemeService,
      useValue: getThemeServiceSpy(),
    },
    {
      provide: TimerService,
      useValue: getTimerServiceSpy(),
    },
  ],
})
export class StubbedServiceTestModule {}

export function getStubbedServiceSpy<T>(t: ProviderToken<T>) {
  const stub = TestBed.inject(t);
  const spy = stub as jasmine.SpyObj<T>;
  return spy;
}
