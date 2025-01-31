import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarFormComponent } from './alterar-form.component';

describe('AlterarFormComponent', () => {
  let component: AlterarFormComponent;
  let fixture: ComponentFixture<AlterarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
