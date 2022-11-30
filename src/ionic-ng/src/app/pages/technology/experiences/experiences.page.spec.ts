import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { HeaderComponent } from '../../../components/page/header/header.component';
import { FooterComponent } from '../../../components/page/footer/footer.component';

import { ExperiencesPage } from './experiences.page';

describe('ExperiencesPage', () => {
  let component: ExperiencesPage;
  let fixture: ComponentFixture<ExperiencesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencesPage ],
      imports: [
        IonicModule.forRoot(),
        HeaderComponent,
        FooterComponent,
      ],
      providers: [Storage],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperiencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
