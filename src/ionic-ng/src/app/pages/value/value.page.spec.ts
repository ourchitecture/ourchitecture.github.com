import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageTestModule } from '../page.module.spec';

import { ValuePage } from './value.page';

describe('ValuePage', () => {
  let component: ValuePage;
  let fixture: ComponentFixture<ValuePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ValuePage],
      imports: [PageTestModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ValuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
