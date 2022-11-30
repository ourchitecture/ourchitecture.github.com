import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { BookItemComponent } from '../../components/list/book-item/book-item.component';
import { HeaderComponent } from '../../components/page/header/header.component';
import { FooterComponent } from '../../components/page/footer/footer.component';

import { PeoplePage } from './people.page';

describe('PeoplePage', () => {
  let component: PeoplePage;
  let fixture: ComponentFixture<PeoplePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplePage ],
      imports: [
        IonicModule.forRoot(),
        HeaderComponent,
        FooterComponent,
        BookItemComponent,
      ],
      providers: [Storage],
    }).compileComponents();

    fixture = TestBed.createComponent(PeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
