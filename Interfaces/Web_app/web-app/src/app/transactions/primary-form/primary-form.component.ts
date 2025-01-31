import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormInvitedComponent } from '../../layouts/messages/form-invited/form-invited.component';
import { FormNotinvitedComponent } from '../../layouts/messages/form-notinvited/form-notinvited.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-primary-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormInvitedComponent,
    FormNotinvitedComponent,
],
  templateUrl: './primary-form.component.html',
  styleUrl: './primary-form.component.css'
})
export class PrimaryFormComponent {
  //Se o item já existir, pegue a quantidade e some com a quantidade anterior numa query

  // Mensagens de envio
  formValid:boolean = false;
  formInvalid:boolean = false;

  // Inicializa o formulário com controles e validadores
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
      this.userForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }


  // Método para enviar o formulário
  onSubmit() {
    if (this.userForm.valid) {
      console.log("Formulário válido");
      console.log(this.userForm.value);

      // Aqui você pode fazer uma requisição para salvar os dados, por exemplo.
      this.http.post('http://localhost:8080/api/item', this.userForm.value).subscribe({
        next: (response) => {
          console.log('Dados enviados com sucesso:', response);
          this.formValid = true;
          this.formInvalid = false;
        },
        error: (error) => {
          console.error('Erro ao enviar dados:', error);
          this.formInvalid = true;
          this.formValid = false;
          console.log('API OFFLINE');
        },
    });
      }
    else{}
  }
}
