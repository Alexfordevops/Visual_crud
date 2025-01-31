import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormInvitedComponent} from '../../layouts/messages/form-invited/form-invited.component';
import { FormNotinvitedComponent } from '../../layouts/messages/form-notinvited/form-notinvited.component';

@Component({
  selector: 'app-deletar-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormInvitedComponent,
    FormNotinvitedComponent
  ],
  templateUrl: './deletar-form.component.html',
  styleUrl: './deletar-form.component.css'
})
export class DeletarFormComponent {

  //Atributos
  public deleteForm!: FormGroup
  formValid:boolean = false;
  formInvalid:boolean = false;

  //Métodos
  constructor(private fb: FormBuilder, private http: HttpClient,){
    this.deleteForm = this.fb.group({
      //Identificador
      id: ['', Validators.required]
    })
  }
  onDelete(){
    if(this.deleteForm.valid){
      const deleteId = this.deleteForm.value.id
      const apiEndpoint: string = `http://localhost:8080/api/item/delete/${deleteId}`
      this.http.delete(apiEndpoint).subscribe({
        next: (response) => {
          console.log('Deletado com sucesso', response)
          this.formValid = true;
          this.formInvalid = false;
        },
        error: (error) => {
          console.log('Erro ao deletar', error)
          this.formValid = false;
          this.formInvalid = true;
        }
      })
    }
  }
}
