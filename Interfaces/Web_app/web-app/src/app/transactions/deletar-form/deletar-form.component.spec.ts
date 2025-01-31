import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarFormComponent } from './deletar-form.component';

describe('DeletarFormComponent', () => {
  let component: DeletarFormComponent;
  let fixture: ComponentFixture<DeletarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletarFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
