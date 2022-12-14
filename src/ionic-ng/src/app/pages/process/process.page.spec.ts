import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageTestModule } from '../page.module.spec';

import { ProcessPage } from './process.page';

describe('ProcessPage', () => {
  let component: ProcessPage;
  let fixture: ComponentFixture<ProcessPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessPage],
      imports: [PageTestModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
