/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClickupgradeComponent } from './clickupgrade.component';

describe('ClickupgradeComponent', () => {
  let component: ClickupgradeComponent;
  let fixture: ComponentFixture<ClickupgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickupgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickupgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
