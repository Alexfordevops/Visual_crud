import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizations',
  imports: [
    CommonModule
  ],
  templateUrl: './visualizations.component.html',
  styleUrl: './visualizations.component.css'
})
export class VisualizationsComponent {
  public items: any[] = []; // Armazena os itens da API
  public columnsName: string[] = []; // Nomes das colunas da tabela

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    const apiEndpoint = 'http://localhost:8080/api/item/list';
    this.http.get<any[]>(apiEndpoint).subscribe({
      next: (response) => {
        if (response.length > 0) {
          this.items = response;
          this.columnsName = Object.keys(response[0]); // Obtém os nomes das colunas dinamicamente
        }
      },
      error: (error) => {
        console.error('Erro ao carregar os dados', error);
      }
    });
  }
}
