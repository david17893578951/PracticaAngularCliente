import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaFacturaComponent } from './prueba-factura.component';

describe('PruebaFacturaComponent', () => {
  let component: PruebaFacturaComponent;
  let fixture: ComponentFixture<PruebaFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
