import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturadetalleComponent } from './facturadetalle.component';

describe('FacturadetalleComponent', () => {
  let component: FacturadetalleComponent;
  let fixture: ComponentFixture<FacturadetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturadetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturadetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
