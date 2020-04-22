import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleCadastroComponent } from './controle-cadastro.component';

describe('ControleCadastroComponent', () => {
  let component: ControleCadastroComponent;
  let fixture: ComponentFixture<ControleCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
