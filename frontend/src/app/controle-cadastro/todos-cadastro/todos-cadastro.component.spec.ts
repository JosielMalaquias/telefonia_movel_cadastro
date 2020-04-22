import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosCadastroComponent } from './todos-cadastro.component';

describe('TodosCadastroComponent', () => {
  let component: TodosCadastroComponent;
  let fixture: ComponentFixture<TodosCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
