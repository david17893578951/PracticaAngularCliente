import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallememoriaComponent } from './detallememoria.component';

describe('DetallememoriaComponent', () => {
  let component: DetallememoriaComponent;
  let fixture: ComponentFixture<DetallememoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallememoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallememoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
