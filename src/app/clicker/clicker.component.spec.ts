/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClickerComponent } from './clicker.component';

describe('ClickerComponent', () => {
  let component: ClickerComponent;
  let fixture: ComponentFixture<ClickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
