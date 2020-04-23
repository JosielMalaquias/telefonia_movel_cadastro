import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescarteBackupComponent } from './descarte-backup.component';

describe('DescarteBackupComponent', () => {
  let component: DescarteBackupComponent;
  let fixture: ComponentFixture<DescarteBackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescarteBackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescarteBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
