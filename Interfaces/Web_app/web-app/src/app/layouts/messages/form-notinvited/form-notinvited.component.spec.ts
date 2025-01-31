import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNotinvitedComponent } from './form-notinvited.component';

describe('FormNotinvitedComponent', () => {
  let component: FormNotinvitedComponent;
  let fixture: ComponentFixture<FormNotinvitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNotinvitedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNotinvitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
