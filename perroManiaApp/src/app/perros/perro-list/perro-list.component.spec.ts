import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroListComponent } from './perro-list.component';

describe('PerroListComponent', () => {
  let component: PerroListComponent;
  let fixture: ComponentFixture<PerroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
