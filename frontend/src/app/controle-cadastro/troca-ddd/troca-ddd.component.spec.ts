import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaDddComponent } from './troca-ddd.component';

describe('TrocaDddComponent', () => {
  let component: TrocaDddComponent;
  let fixture: ComponentFixture<TrocaDddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocaDddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocaDddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
