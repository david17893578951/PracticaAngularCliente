import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaproductoComponent } from './facturaproducto.component';

describe('FacturaproductoComponent', () => {
  let component: FacturaproductoComponent;
  let fixture: ComponentFixture<FacturaproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
