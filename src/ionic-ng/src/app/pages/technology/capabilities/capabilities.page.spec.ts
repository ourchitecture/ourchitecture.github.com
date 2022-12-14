import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageTestModule } from '../../page.module.spec';

import { CapabilitiesPage } from './capabilities.page';

describe('CapabilitiesPage', () => {
  let component: CapabilitiesPage;
  let fixture: ComponentFixture<CapabilitiesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CapabilitiesPage],
      imports: [PageTestModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CapabilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
