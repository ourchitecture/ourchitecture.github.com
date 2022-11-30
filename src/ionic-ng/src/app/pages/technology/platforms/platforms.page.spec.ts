import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { HeaderComponent } from '../../../components/page/header/header.component';
import { FooterComponent } from '../../../components/page/footer/footer.component';

import { PlatformsPage } from './platforms.page';

describe('PlatformsPage', () => {
  let component: PlatformsPage;
  let fixture: ComponentFixture<PlatformsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformsPage ],
      imports: [
        IonicModule.forRoot(),
        HeaderComponent,
        FooterComponent,
      ],
      providers: [Storage],
    }).compileComponents();

    fixture = TestBed.createComponent(PlatformsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
