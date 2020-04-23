import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleBackupComponent } from './controle-backup.component';

describe('ControleBackupComponent', () => {
  let component: ControleBackupComponent;
  let fixture: ComponentFixture<ControleBackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleBackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
