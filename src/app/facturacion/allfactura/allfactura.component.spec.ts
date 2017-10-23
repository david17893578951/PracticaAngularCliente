import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfacturaComponent } from './allfactura.component';

describe('AllfacturaComponent', () => {
  let component: AllfacturaComponent;
  let fixture: ComponentFixture<AllfacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllfacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllfacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
