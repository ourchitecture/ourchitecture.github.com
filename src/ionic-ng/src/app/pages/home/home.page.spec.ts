import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { HeaderComponent } from '../../components/page/header/header.component';
import { FooterComponent } from '../../components/page/footer/footer.component';

import { BookItemComponent } from '../../components/list/book-item/book-item.component';
import { UrlItemComponent } from '../../components/list/url-item/url-item.component';
import { VideoItemComponent } from '../../components/list/video-item/video-item.component';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HeaderComponent,
        FooterComponent,
        BookItemComponent,
        UrlItemComponent,
        VideoItemComponent,
      ],
      providers: [Storage],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
