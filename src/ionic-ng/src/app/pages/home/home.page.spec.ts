import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { BookItemComponentModule } from '../../components/list/book-item/book-item.module';
import { UrlItemComponentModule } from '../../components/list/url-item/url-item.module';
import { VideoItemComponentModule } from '../../components/list/video-item/video-item.module';
import { FooterComponentModule } from '../../components/page/footer/footer.module';

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
        BookItemComponentModule,
        UrlItemComponentModule,
        VideoItemComponentModule,
        FooterComponentModule,
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
