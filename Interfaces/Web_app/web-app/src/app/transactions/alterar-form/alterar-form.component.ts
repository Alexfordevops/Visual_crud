import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormInvitedComponent} from '../../layouts/messages/form-invited/form-invited.component';
import { FormNotinvitedComponent } from '../../layouts/messages/form-notinvited/form-notinvited.component';

@Component({
  selector: 'app-alterar-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormInvitedComponent,
    FormNotinvitedComponent
  ],
  templateUrl: './alterar-form.component.html',
  styleUrl: './alterar-form.component.css'
})
export class AlterarFormComponent {

  //Atributos
  private apiEndpoint: string = 'http://localhost:8080/api/item/update'
  public alterForm!: FormGroup
  formValid:boolean = false;
  formInvalid:boolean = false;

  //Métodos
  constructor(private fb: FormBuilder,
              private http: HttpClient
  ){
    this.alterForm = this.fb.group({
      //Identificador
      id: ['', Validators.required],
      //Campos de alteração
      name: ['', Validators.required],
      category: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]]
      });
  }

  ngOnInit(){}

  onSubmit(){
    if (this.alterForm.valid){
      const updateData = {
        id: this.alterForm.value.id,
        name: this.alterForm.value.name,
        category: this.alterForm.value.category,
        quantity: this.alterForm.value.quantity
      }
      this.http.put(this.apiEndpoint, updateData).subscribe({
        next: (response) => {
          console.log('Atualizado com sucesso', response)
          this.formValid = true;
          this.formInvalid = false;
        },
        error: (error) => {
          console.log('Erro na atualização', error)
          this.formValid = false;
          this.formInvalid = true;
        }
      })
    }
  }
}
