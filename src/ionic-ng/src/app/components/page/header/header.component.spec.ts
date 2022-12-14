import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { HeaderComponent } from './header.component';
import {
  StubbedServiceTestModule,
  getStubbedServiceSpy,
} from 'src/app/services/stubbed.service.module.spec';
import { ThemeService } from 'src/app/services/theme.service';
import { SearchService } from 'src/app/services/search.service';

describe('HeaderComponent', () => {
  let searchServiceSpy: jasmine.SpyObj<SearchService>;
  let themeServiceSpy: jasmine.SpyObj<ThemeService>;

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HeaderComponent,
        IonicModule.forRoot(),
        StubbedServiceTestModule,
      ],
      providers: [Storage],
    }).compileComponents();

    searchServiceSpy = getStubbedServiceSpy(SearchService);
    themeServiceSpy = getStubbedServiceSpy(ThemeService);

    fixture = TestBed.createComponent(HeaderComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
