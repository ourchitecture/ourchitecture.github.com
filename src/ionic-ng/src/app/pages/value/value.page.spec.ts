import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { HeaderComponent } from '../../components/page/header/header.component';
import { FooterComponent } from '../../components/page/footer/footer.component';

import { ValuePage } from './value.page';

describe('ValuePage', () => {
  let component: ValuePage;
  let fixture: ComponentFixture<ValuePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuePage ],
      imports: [
        IonicModule.forRoot(),
        HeaderComponent,
        FooterComponent,
      ],
      providers: [Storage],
    }).compileComponents();

    fixture = TestBed.createComponent(ValuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
