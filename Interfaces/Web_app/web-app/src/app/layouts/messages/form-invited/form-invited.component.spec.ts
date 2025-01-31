import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInvitedComponent } from './form-invited.component';

describe('FormInvitedComponent', () => {
  let component: FormInvitedComponent;
  let fixture: ComponentFixture<FormInvitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInvitedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInvitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
