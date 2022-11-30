import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { HeaderComponent } from '../../components/page/header/header.component';
import { FooterComponent } from '../../components/page/footer/footer.component';

import { TechnologyPage } from './technology.page';

describe('TechnologyPage', () => {
  let component: TechnologyPage;
  let fixture: ComponentFixture<TechnologyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyPage ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HeaderComponent,
        FooterComponent,
      ],
      providers: [Storage],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
