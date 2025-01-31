import { Component } from '@angular/core';
import { PrimaryFormComponent } from '../../transactions/primary-form/primary-form.component';
import { AlterarFormComponent } from '../../transactions/alterar-form/alterar-form.component';
import { DeletarFormComponent } from "../../transactions/deletar-form/deletar-form.component";
import { InserirFormComponent } from "../../transactions/inserir-form/inserir-form.component";

@Component({
  selector: 'app-home',
  imports: [PrimaryFormComponent,
    AlterarFormComponent, DeletarFormComponent, InserirFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
