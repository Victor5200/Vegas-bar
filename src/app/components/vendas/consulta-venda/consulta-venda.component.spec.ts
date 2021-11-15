import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaVendaComponent } from './consulta-venda.component';

describe('ConsultaVendaComponent', () => {
  let component: ConsultaVendaComponent;
  let fixture: ComponentFixture<ConsultaVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaVendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
