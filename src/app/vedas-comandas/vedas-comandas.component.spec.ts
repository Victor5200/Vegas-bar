import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedasComandasComponent } from './vedas-comandas.component';

describe('VedasComandasComponent', () => {
  let component: VedasComandasComponent;
  let fixture: ComponentFixture<VedasComandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VedasComandasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VedasComandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
