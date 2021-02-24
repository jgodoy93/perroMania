import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPerroComponent } from './button-perro.component';

describe('ButtonPerroComponent', () => {
  let component: ButtonPerroComponent;
  let fixture: ComponentFixture<ButtonPerroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPerroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
