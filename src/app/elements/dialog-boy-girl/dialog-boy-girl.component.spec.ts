import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoyGirlComponent } from './dialog-boy-girl.component';

describe('DialogBoyGirlComponent', () => {
  let component: DialogBoyGirlComponent;
  let fixture: ComponentFixture<DialogBoyGirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBoyGirlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBoyGirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
