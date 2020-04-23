import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBackupComponent } from './cadastro-backup.component';

describe('CadastroBackupComponent', () => {
  let component: CadastroBackupComponent;
  let fixture: ComponentFixture<CadastroBackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroBackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
