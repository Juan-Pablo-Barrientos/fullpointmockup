/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SendCVComponent } from './sendCV.component';

describe('SendCVComponent', () => {
  let component: SendCVComponent;
  let fixture: ComponentFixture<SendCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
