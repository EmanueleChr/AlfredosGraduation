import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAuguriComponent } from './dialog-auguri.component';

describe('DialogAuguriComponent', () => {
  let component: DialogAuguriComponent;
  let fixture: ComponentFixture<DialogAuguriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAuguriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAuguriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
