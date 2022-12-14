import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageTestModule } from '../../page.module.spec';

import { PlatformsPage } from './platforms.page';

describe('PlatformsPage', () => {
  let component: PlatformsPage;
  let fixture: ComponentFixture<PlatformsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformsPage],
      imports: [PageTestModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PlatformsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
