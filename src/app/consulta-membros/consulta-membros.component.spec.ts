import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMembrosComponent } from './consulta-membros.component';

describe('ConsultaMembrosComponent', () => {
  let component: ConsultaMembrosComponent;
  let fixture: ComponentFixture<ConsultaMembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaMembrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
