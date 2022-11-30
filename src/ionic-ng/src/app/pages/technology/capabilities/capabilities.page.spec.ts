import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { HeaderComponent } from '../../../components/page/header/header.component';
import { FooterComponent } from '../../../components/page/footer/footer.component';

import { CapabilitiesPage } from './capabilities.page';

describe('CapabilitiesPage', () => {
  let component: CapabilitiesPage;
  let fixture: ComponentFixture<CapabilitiesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilitiesPage ],
      imports: [
        IonicModule.forRoot(),
        HeaderComponent,
        FooterComponent,
      ],
      providers: [Storage],
    }).compileComponents();

    fixture = TestBed.createComponent(CapabilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
