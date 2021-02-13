import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroDetailComponent } from './perro-detail.component';

describe('PerroDetailComponent', () => {
  let component: PerroDetailComponent;
  let fixture: ComponentFixture<PerroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
