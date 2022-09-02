import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OminoComponent } from './omino.component';

describe('OminoComponent', () => {
  let component: OminoComponent;
  let fixture: ComponentFixture<OminoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OminoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
