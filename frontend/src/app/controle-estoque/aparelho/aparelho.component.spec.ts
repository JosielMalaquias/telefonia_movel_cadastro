import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AparelhoComponent } from './aparelho.component';

describe('AparelhoComponent', () => {
  let component: AparelhoComponent;
  let fixture: ComponentFixture<AparelhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AparelhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AparelhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
