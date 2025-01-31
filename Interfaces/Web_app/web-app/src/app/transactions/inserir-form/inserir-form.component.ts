import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormInvitedComponent} from '../../layouts/messages/form-invited/form-invited.component';
import { FormNotinvitedComponent } from '../../layouts/messages/form-notinvited/form-notinvited.component';

@Component({
  selector: 'app-inserir-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormInvitedComponent,
    FormNotinvitedComponent
  ],
  templateUrl: './inserir-form.component.html',
  styleUrl: './inserir-form.component.css'
})
export class InserirFormComponent {

  //Atributos
  public insertForm!: FormGroup;
  formValid:boolean = false;
  formInvalid:boolean = false;

  //Métodos
  constructor(private fb: FormBuilder, private http: HttpClient,){
    this.insertForm = this.fb.group({
      //Identificador
      id: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')]]
    })
  }
  onSubmit() {
    if (this.insertForm.valid) {
      const id = this.insertForm.value.id;
      const quantity = this.insertForm.value.quantity;
      const apiEndpoint: string = `http://localhost:8080/api/item/update/insert/${id}`;
  
      this.http.put(apiEndpoint, { quantity }).subscribe({
        next: (response) => {
          console.log('Inserido com sucesso', response);
          this.formValid = true;
          this.formInvalid = false;
        },
        error: (error) => {
          console.log('Erro ao inserir', error);
          this.formValid = false;
          this.formInvalid = true;
        }
      });
    }
  }
}
