import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirFormComponent } from './inserir-form.component';

describe('InserirFormComponent', () => {
  let component: InserirFormComponent;
  let fixture: ComponentFixture<InserirFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserirFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
