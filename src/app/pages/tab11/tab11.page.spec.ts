import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab11Page } from './tab11.page';

describe('Tab11Page', () => {
  let component: Tab11Page;
  let fixture: ComponentFixture<Tab11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab11Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
