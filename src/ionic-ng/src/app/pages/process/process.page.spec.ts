import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterComponentModule } from '../../components/page/footer/footer.module';

import { ProcessPage } from './process.page';

describe('ProcessPage', () => {
  let component: ProcessPage;
  let fixture: ComponentFixture<ProcessPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessPage ],
      imports: [IonicModule.forRoot(), FooterComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
