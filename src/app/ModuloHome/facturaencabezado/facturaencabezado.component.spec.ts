import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaencabezadoComponent } from './facturaencabezado.component';

describe('FacturaencabezadoComponent', () => {
  let component: FacturaencabezadoComponent;
  let fixture: ComponentFixture<FacturaencabezadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaencabezadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaencabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
